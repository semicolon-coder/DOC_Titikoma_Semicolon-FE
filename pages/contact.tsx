import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reservation from '../components/Reservation';
import ContactUs from '../components/ContactUs';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Kontak - TITIKOMA</title>
      </Head>
      <Navbar activeMenu="contact" />
      <Reservation />
      <ContactUs />
      <Footer />
    </>
  );
}
