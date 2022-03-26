import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import MenuSection from '../components/MenuSection';

export default function Menu() {
  return (
    <>
      <Head>
        <title>Menu - TITIKOMA</title>
      </Head>
      <Navbar activeMenu="menu" />
      <img
        className="object-cover h-96 lg:h-[550px] w-full"
        src="/images/Menu_Banner_1.png"
        alt="banner-promo"
      />
      <MenuSection />
      <Newsletter />
      <Footer />
    </>
  );
}
