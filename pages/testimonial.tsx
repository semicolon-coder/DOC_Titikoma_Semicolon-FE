import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

export default function Testimonial() {
  return (
    <>
      <Head>
        <title>Testimonial - TITIKOMA</title>
      </Head>
      <Navbar activeMenu="testimonial" />
      <Testimonials />
      <Footer />
    </>
  );
}
