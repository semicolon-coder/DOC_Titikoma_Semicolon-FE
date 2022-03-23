import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PopularMenu from '../components/PopularMenu';
import Review from '../components/Review';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <>
      <Head>
        <title>TITIKOMA - Coffee Shop</title>
      </Head>
      <Navbar activeMenu="home" />
      <Hero />
      <PopularMenu />
      <Review />
      <Newsletter />
      <Footer />
    </>
  );
}
