import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Cart() {
  return (
    <>
      <Head>
        <title>Keranjang - TITIKOMA</title>
      </Head>
      <Navbar activeMenu="cart" />
      <h1>Cart</h1>
      <Footer />
    </>
  );
}
