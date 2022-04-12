import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import ProductCard from '../Product';
import Highlight from './Highlight';
import { getPopularProduct } from '../../services/api';
import { ProductTypes } from '../../services/data-types';
import AddItem from '../../config/cart/AddItem';

function PopularMenu() {
  const [popularProduct, setPopularProduct] = useState([]);
  const [cart, setCart] = useState<ProductTypes[]>([]);
  let localCart: string | null;
  if (typeof window !== 'undefined') {
    localCart = localStorage.getItem('cart');
  }

  const getPopularProductAPI = useCallback(async () => {
    const dataFromAPI = await getPopularProduct();
    setPopularProduct(dataFromAPI.data);
  }, [getPopularProduct]);

  const onAddItemCart = (item: ProductTypes, name: string) => {
    const cartCopy = AddItem(cart, item, name);

    setCart(cartCopy);

    const stringCart = JSON.stringify(cartCopy);
    localStorage.setItem('cart', stringCart);
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
      {popularProduct.map((item: ProductTypes) => (
        <ProductCard
          key={item._id}
          _id={item._id}
          title={item.name}
          image={item.image}
          price={item.price}
          qty={1}
          onAddClick={() => onAddItemCart(item, item.name)}
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
