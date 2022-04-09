import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InputCustomer from '../components/InputCustomer';
import OrderDetail from '../components/OrderDetail';
import PaymentMethod from '../components/PaymentMethod';

export default function Cart() {
  return (
    <>
      <Head>
        <title>Keranjang - TITIKOMA</title>
      </Head>
      <Navbar activeMenu="cart" />
      <InputCustomer />
      <PaymentMethod />
      <OrderDetail />
      <Footer />
    </>
  );
}
