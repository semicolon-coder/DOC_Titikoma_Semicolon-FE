import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Menu() {
  return (
    <>
      <Head>
        <title>Menu - TITIKOMA</title>
      </Head>
      <Navbar activeMenu="menu" />
      <h1>Menu</h1>
      <Footer />
    </>
  );
}
