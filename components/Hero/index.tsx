import React from 'react';
import Link from 'next/link';

function Hero() {
  return (
    <div className="font-poppins">
      <div
        className="bg-fixed bg-cover bg-center h-96 w-full p-7 lg:h-[550px] hero-image"
        style={{ backgroundImage: 'url("/images/hero-img.png")' }}
      >
        <div className="text-white text-center sm:pt-12 lg:text-left lg:mx-16 lg:mt-11">
          <h1 className="font-bold text-3xl lg:w-1/3 lg:text-4xl">
            Nikmati momen Anda dengan Titikoma;
          </h1>
          <p className="mt-3 font-th lg:w-1/3">
            Kami memberikan jenis biji kopi terbaik yang telah diseleksi secara
            ketat. Bijih kopi kami impor dari negara Guatemala, Colombia, Costa
            Rica, The Arabian Penisula, Ethiopia, dan Jamaica.
          </p>
          <button
            type="button"
            className="mt-3 py-2 px-4 bg-primary rounded-md"
          >
            <Link href="/menu">
              <a href="#">Beli Sekarang</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
