import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import ItemTable from './ItemTable';
import ItemCalculation from './ItemCalculation';
import { CartTypes } from '../../services/data-types';
import accumulator from '../../config/cart/Accumulator';

function OrderDetail() {
  const router = useRouter();
  const [cart, setCart] = useState<any[]>([]);
  const [calculation, setCalculation] = useState({
    subtotal: 0,
    tax: 0,
    total: 0,
    discount: 0,
  });

  const onEditItemCart = (itemId: string, amount: number, name: string) => {
    let cartCopy = [...cart];
    const existentItem = cartCopy.find((item) => item._id === itemId);

    if (!existentItem) return;

    existentItem.qty += amount;

    if (existentItem.qty <= 0) {
      cartCopy = cartCopy.filter((item) => item._id !== itemId);
    }

    setCart(cartCopy);
    const cartString = JSON.stringify(cartCopy);

    localStorage.setItem('cart', cartString);
    toast.success(
      `Berhasil mengubah jumlah barang ${name} menjadi ${existentItem.qty}.`
    );
  };

  const onRemoveItemCart = (itemId: string, name: string) => {
    let cartCopy = [...cart];
    cartCopy = cartCopy.filter((item) => item._id !== itemId);

    setCart(cartCopy);

    const cartString = JSON.stringify(cartCopy);
    localStorage.setItem('cart', cartString);
    toast.success(`Berhasil menghapus ${name}.`);
  };

  useEffect(() => {
    let localCart: string | null;
    if (typeof window !== 'undefined') {
      localCart = localStorage.getItem('cart');
    }
    const localCartJSON = JSON.parse(localCart!);
    if (localCartJSON) {
      setCart(localCartJSON);
    }
  }, []);

  useEffect(() => {
    const tax = 10;
    const discount = 0;
    let localCart: CartTypes;
    if (typeof window !== 'undefined') {
      localCart = JSON.parse(localStorage.getItem('cart')!);
      if (localCart === null) {
        router.push('/');
      } else {
        const result = accumulator(localCart, discount, tax);
        localStorage.setItem('calculation', JSON.stringify(result));
        setCalculation(result);
      }
    }
  }, [cart]);

  const onSubmit = () => {
    toast.success('Checkout button!');
  };

  return (
    <>
      <div className="mx-8 lg:px-16 lg:mx-8 py-5 text-center md:text-left">
        <div className="border-b">
          <h1 className="text-3xl font-bold mb-1 text-secondary">
            Detail Order
          </h1>
        </div>
      </div>
      <div className="mx-8 lg:px-16 lg:mx-8 py-5 text-left font-poppins">
        <div className="overflow-hidden flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow-md rounded-md">
                <table className="min-w-full">
                  <thead className="bg-primary text-white">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-md text-left font-medium tracking-wider uppercase"
                    >
                      Foto Produk
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-md text-left font-medium tracking-wider uppercase"
                    >
                      Nama Produk
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-md text-left font-medium tracking-wider uppercase"
                    >
                      Harga
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-md text-left font-medium tracking-wider uppercase"
                    >
                      Jumlah
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-md text-left font-medium tracking-wider uppercase"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-md text-left font-medium tracking-wider uppercase"
                    >
                        <span className="flex flex-row justify-center">
                          Hapus
                        </span>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  {cart.map((item: CartTypes) => (
                    <ItemTable
                      key={item._id}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                      qty={item.qty}
                      onBtnAdd={() => {
                        onEditItemCart(item._id, 1, item.name);
                      }}
                      onBtnSubt={() =>
                        onEditItemCart(item._id, -1, item.name)
                      }
                      onBtnDelete={() =>
                        onRemoveItemCart(item._id, item.name)
                      }
                    />
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <ItemCalculation title="Subtotal" value={calculation.subtotal} />
        <ItemCalculation title="Potongan Harga" value={calculation.discount} />
        <ItemCalculation title="Tax (10%)" value={calculation.tax} />
        <ItemCalculation title="Total" value={calculation.total} />
        <a href="#">
          <div className="flex flex-row justify-center">
            <button
              type="button"
              className="px-10 py-3 mt-6 font-medium text-white uppercase bg-primary rounded-full shadow item-center hover:shadow-lg transition duration-300"
              onClick={onSubmit}
            >
              <span className="ml-2 mt-5px font-semibold">Pesan Sekarang</span>
            </button>
          </div>
        </a>
      </div>
    </>
  );
}

export default OrderDetail;
