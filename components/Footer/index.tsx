import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <div className="mt-20 bg-primary w-full font-poppins">
      <div className="md:flex md:flex-row gap-6 justify-center md:justify-around mx-8 lg:px-16 lg:mx-8 py-5 text-white text-center md:text-left">
        <div className="flex flex-col justify-center mt-5">
          <img
            className="h-12 mx-auto"
            src="/images/semicolon-logo.png"
            alt=""
          />
        </div>
        <div className="flex flex-col mt-5">
          <h1 className="text-lg font-semibold">Lokasi</h1>
          <p className="font-thin">
            Jl. Titikoma No. 21,
            <br />
            Ketintang Kota Surabaya,
            <br />
            Jawa Timur
            <br />
            60231
          </p>
        </div>
        <div className="flex flex-col mt-5">
          <h1 className="text-lg font-semibold">Halaman</h1>
          <p className="font-thin hover:underline">
            <Link href="/menu">
              <a>Menu</a>
            </Link>
          </p>
          <p className="font-thin hover:underline">
            <Link href="/contact">
              <a>Reservasi</a>
            </Link>
          </p>
          <p className="font-thin hover:underline">
            <Link href="/testimonial">
              <a>Testimonial</a>
            </Link>
          </p>
        </div>
        <div className="flex flex-col mt-5">
          <h1 className="text-lg font-semibold">Kontak Kami</h1>
          <p className="font-thin">contact@titikoma.coffee</p>
          <p className="font-thin">+62 8392783442</p>
        </div>
      </div>
      <div className="flex flex-row text-white justify-center mt-8 pb-3">
        <p>Made with </p>
        <span>
          <svg
            className="w-5 h-5 mx-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <p> by Semicolon; Team</p>
      </div>
    </div>
  );
}

export default Footer;
