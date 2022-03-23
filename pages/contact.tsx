import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Kontak - TITIKOMA</title>
      </Head>
      <Navbar activeMenu="contact" />
      <h1>Contact</h1>
      <Footer />
    </>
  );
}
