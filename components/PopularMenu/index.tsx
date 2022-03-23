import React from 'react';
import Link from 'next/link';
import ProductCard from '../Product';
import Highlight from './Highlight';

function PopularMenu() {
  return (
    <div className="grid grid-cols-12 gap-4 mx-8 font-poppins lg:px-16 lg:mx-8">
      <div className="col-span-12 mt-16">
        <h1 className="text-primary text-center font-bold text-2xl">
          Popular Menu
        </h1>
      </div>
      <ProductCard
        title="Arabica Coffee"
        image="/product-img/americano.jpg"
        price={15000}
      />
      <ProductCard
        title="Capuccino Coffee"
        image="/product-img/cappuccino.jpg"
        price={21000}
      />
      <ProductCard
        title="Lemon Splash"
        image="/product-img/lemon-splash.jpg"
        price={24000}
      />
      <ProductCard
        title="Sandwich"
        image="/product-img/sandwich.jpg"
        price={22000}
      />
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
