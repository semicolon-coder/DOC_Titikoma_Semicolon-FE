import React, { useState } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import Menu from './Menu';

interface NavbarActiveProps {
  activeMenu: 'home' | 'menu' | 'testimonial' | 'contact' | 'cart';
}

export default function Navbar(props: NavbarActiveProps) {
  const { activeMenu } = props;

  const [toggleMenu, setToggleMenu] = useState(true);
  const classNames = cx({
    'h-auto': true,
    'w-screen': true,
    'mt-[75px]': true,
    absolute: true,
    'right-0': true,
    '-top-[283px]': toggleMenu,
    'bg-primary': true,
    flex: true,
    'flex-col': true,
    'justify-center': true,
    'lg:hidden': true,
  });

  return (
    <div className="grid grid-cols-12 font-poppins">
      <div className="col-span-12 bg-primary h-[75px] flex flex-row justify-between">
        <div className="flex flex-col justify-center px-7 lg:ml-16 w-56">
          <Link href="/">
            <img src="/images/semicolon-logo.png" alt="TITIKOMA-LOGO" />
          </Link>
        </div>
        <div className="hidden lg:inline-flex">
          <div className="h-auto flex flex-row justify-between">
            <Menu href="/" title="Home" active={activeMenu === 'home'} />
            <Menu href="/menu" title="Menu" active={activeMenu === 'menu'} />
            <Menu
              href="/testimonial"
              title="Testimonial"
              active={activeMenu === 'testimonial'}
            />
            <Menu
              href="/contact"
              title="Kontak Kami"
              active={activeMenu === 'contact'}
            />
            <div className="h-auto mx-5 flex flex-col justify-center" />
          </div>
        </div>
        <div className="flex flex-col justify-center px-7 lg:mr-16">
          <span
            className="w-[35px] h-auto my-auto border border-white rounded-md lg:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <svg
              className="w-6 h-6 m-auto text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
          <span className="hidden lg:inline-block">
            <Link href="/cart">
              <a aria-label="Cart">
                <svg
                  className="w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </a>
            </Link>
          </span>
        </div>
        <div className={classNames}>
          <div className="h-auto border-t py-2">
            <h1 className="text-white text-center">
              <Link href="/">
                <a>Home</a>
              </Link>
            </h1>
          </div>
          <div className="h-auto border-t py-2">
            <h1 className="text-white text-center">
              <Link href="/menu">
                <a>Menu</a>
              </Link>
            </h1>
          </div>
          <div className="h-auto border-t py-2">
            <h1 className="text-white text-center">
              <Link href="/testimonial">
                <a>Testimonial</a>
              </Link>
            </h1>
          </div>
          <div className="h-auto border-t py-2">
            <h1 className="text-white text-center">
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </h1>
          </div>
          <div className="h-auto border-t py-2 flex justify-center">
            <Link href="/cart">
              <a aria-label="Cart">
                <svg
                  className="w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
