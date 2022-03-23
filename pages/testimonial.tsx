import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Testimonial() {
  return (
    <>
      <Head>
        <title>Testimonial - TITIKOMA</title>
      </Head>
      <Navbar activeMenu="testimonial" />
      <h1>Testimonial</h1>
      <Footer />
    </>
  );
}
