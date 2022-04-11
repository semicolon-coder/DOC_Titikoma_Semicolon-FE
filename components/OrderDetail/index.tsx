import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import ItemTable from './ItemTable';
import ItemCalculation from './ItemCalculation';
import { CartTypes } from '../../services/data-types';
import accumulator from '../../config/cart/Accumulator';
import { addOrder, getPromoByCode } from '../../services/api';

function OrderDetail() {
  const router = useRouter();
  const [cart, setCart] = useState<any[]>([]);
  const [inputCodePromo, setInputCodePromo] = useState('');
  const [dataDiscount, setDataDiscount] = useState({
    discountValue: 0,
    code: '',
  });
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
      `Berhasil mengubah jumlah menu ${name} menjadi ${existentItem.qty}.`
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

  const getPromoByCodeAPI = useCallback(
    async (code) => getPromoByCode(code),
    [getPromoByCode]
  );

  const onApplyDiscount = async () => {
    await getPromoByCodeAPI(inputCodePromo)
      .then((res) => {
        if (res.data.status) {
          setDataDiscount(res.data);
          toast.success('Kode voucher berhasil digunakan!');
        } else {
          setDataDiscount({ discountValue: 0, code: '' });
          toast.error('Kode voucher gagal digunakan/masa berlaku invalid!');
        }
      })
      .catch((err) => {
        setDataDiscount({ discountValue: 0, code: '' });
        toast.error('Kode voucher tidak valid!');
      });
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
    const discount = dataDiscount.discountValue;
    let localCart: CartTypes;
    if (typeof window !== 'undefined') {
      localCart = JSON.parse(localStorage.getItem('cart')!);
      if (localCart === null) {
        router.push('/');
        toast.error('Silahkan tambahkan menu terlebih dahulu!');
      } else {
        const result = accumulator(localCart, discount, tax);
        localStorage.setItem('calculation', JSON.stringify(result));
        localStorage.setItem('data-discount', JSON.stringify(dataDiscount));
        setCalculation(result);
      }
    }
  }, [cart, dataDiscount]);

  const onSubmit = async () => {
    const localCart = JSON.parse(localStorage.getItem('cart')!);
    const localUserData = JSON.parse(localStorage.getItem('user-data')!);
    const localCalculation = JSON.parse(localStorage.getItem('calculation')!);
    const localPaymentMethod = JSON.parse(
      localStorage.getItem('payment-method')!
    );
    const localDataDiscount = JSON.parse(
      localStorage.getItem('data-discount')!
    );

    const schemaDataCart = localCart.map((item: CartTypes) => ({
      _id: item._id,
      productId: item.productId,
      productName: item.name,
      productPrice: item.price,
      qty: item.qty,
    }));

    const isMinus = localCart
      .map((item: CartTypes) => {
        const checkStock = item.stock - item.qty;

        if (checkStock < 0) {
          toast.error(`${item.name} stock tersisa tinggal ${item.stock}.`);
          return true;
        }

        return false;
      })
      .find((item: CartTypes) => item);

    const data = {
      historyCart: schemaDataCart,
      subtotal: localCalculation.subtotal,
      historyPromo: localDataDiscount._id || null,
      tax: localCalculation.tax,
      discount: localCalculation.discount,
      total: localCalculation.total,
      customer: localUserData,
      payment: {
        name: localPaymentMethod,
        category: 'Direct',
        accountNumber: '-',
      },
    };

    if (
      localPaymentMethod === '' ||
      localUserData.name === '' ||
      localUserData.email === '' ||
      localUserData.phoneNumber === ''
    ) {
      toast.error('Isi data anda terlebih dahulu!');
    } else if (isMinus !== true) {
      await addOrder(data)
        .then((res) => {
          localStorage.removeItem('cart');
          localStorage.removeItem('user-data');
          localStorage.removeItem('calculation');
          localStorage.removeItem('data-discount');
          localStorage.removeItem('payment-method');
          router.push(res.data.callback);
          toast.success('Berhasil Checkout!');
        })
        .catch((err) => {
          toast.error('Gagal checkout!');
        });
    } else {
      toast.error(
        'Silahkan sesuaikan jumlah pesanan sesuai dengan stock tersisa!'
      );
    }
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
        <div className="grid grid-cols-12 gap-5 lg:gap-20">
          <div className="col-span-12 lg:col-span-6 mt-6">
            <h1 className="mb-2 text-lg lg:text-xl font-bold">Kode Voucher</h1>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-12 md:col-span-8 w-full h-auto flex flex-col">
                <input
                  type="text"
                  className="rounded-full px-4 py-[10px] border border-gray-500 font-thin text-sm"
                  placeholder="Masukkan kode voucher.."
                  onChange={(event) => setInputCodePromo(event.target.value)}
                />
              </div>
              <div className="col-span-12 md:col-span-4 h-auto flex flex-col">
                <button
                  type="button"
                  className="px-4 py-2 border border-secondary rounded-full hover:bg-primary hover:text-white transition duration-300"
                  onClick={onApplyDiscount}
                >
                  Pakai
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col lg:mt-4">
            <ItemCalculation title="Subtotal" value={calculation.subtotal} />
            <ItemCalculation
              title={`Diskon ${dataDiscount.code}`}
              value={calculation.discount}
            />
            <ItemCalculation title="Tax (10%)" value={calculation.tax} />
            <ItemCalculation title="Total" value={calculation.total} />
          </div>
        </div>
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
