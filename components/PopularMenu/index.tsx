import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import ProductCard from '../Product';
import Highlight from './Highlight';
import { getPopularProduct } from '../../services/api';
import { CartTypes, ProductCardProps } from '../../services/data-types';

function PopularMenu() {
  const [popularProduct, setPopularProduct] = useState([]);
  const [cart, setCart] = useState<any[]>([]);
  let localCart: string | null;
  if (typeof window !== 'undefined') {
    localCart = localStorage.getItem('cart');
  }

  const getPopularProductAPI = useCallback(async () => {
    const data = await getPopularProduct();
    setPopularProduct(data);
  }, [getPopularProduct]);

  const addToCart = (item: CartTypes, name: string) => {
    item.qty = 1;
    const cartCopy = [...cart];

    const existingItem = cartCopy.find(
      (cartItem: ProductCardProps) => cartItem._id === item._id
    );

    if (existingItem) {
      existingItem.qty += item.qty;
    } else {
      cartCopy.push(item);
    }

    setCart(cartCopy);

    const stringCart = JSON.stringify(cartCopy);
    localStorage.setItem('cart', stringCart);
    toast.success(`Berhasil menambahkan ${name} ke dalam keranjang!`);
  };

  useEffect(() => {
    getPopularProductAPI();
    const localCartJSON = JSON.parse(localCart!);
    if (localCartJSON) {
      setCart(localCartJSON);
    }
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4 mx-8 font-poppins lg:px-16 lg:mx-8">
      <div className="col-span-12 mt-16">
        <h1 className="text-primary text-center font-bold text-2xl">
          Popular Menu
        </h1>
      </div>
      {popularProduct.map((item: CartTypes) => (
        <ProductCard
          key={item._id}
          _id={item._id}
          title={item.name}
          image={item.image}
          price={item.price}
          qty={1}
          onAddClick={() => addToCart(item, item.name)}
        />
      ))}
      <Highlight
        name="Beef Taco"
        title="Melihat pemandangan bagus dengan"
        description="Ajak teman-teman Anda dan nikmati pemandangan dengan Beef Taco!"
        image="/product-img/beef-taco.jpg"
        href="/menu"
        isImageInLeft
      />
      <Highlight
        name="cappucino Coffee"
        title="Segarkan dengan"
        description="Segelas cappucino dengan taburan lembut dapat menyegarkan pikiran
              Anda dan meningkatkan inspirasi Anda!"
        image="/product-img/cappuccino.jpg"
        href="/menu"
      />
      <div className="col-span-12">
        <div className="flex flex-row justify-center">
          <button
            type="button"
            className="mt-6 py-2 px-6 border border-primary rounded-full text-primary shadow-md hover:shadow-xl transition duration-300 hover:bg-primary hover:text-white"
          >
            <Link href="/menu">
              <a href="#">Lihat Menu</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopularMenu;
