import Link from 'next/link';
import React from 'react'
import Item from './Item';

function Reservation() {
  return (
      <div>
        <div className="mx-8 lg:px-16 lg:mx-8 py-5 text-center md:text-left">
            <div className="border-b">
                <h1 className="text-3xl font-bold mb-1 text-secondary">Reservasi</h1>
            </div>
        </div>
        <div className="flex flex-col mx-8 lg:px-16 lg:mx-8 py-5 text-left font-poppins">
            <form action="/">
                <div className="grid grid-cols-12 gap-6">
                    <Item title="Nama" type="text" label="nameCustomer" placeholder="Masukkan nama anda..." />
                    <Item title="Email" type="email" label="emailCustomer" placeholder="Masukkan email aktif anda.." />
                    <Item title="Nomor Telfon" type="text" label="numberCustomer" placeholder="Masukkan nomor telfon aktif anda.."/>
                    <Item title="Jumlah Orang" type="text" label="countCustomer" placeholder="Masukkan jumlah orang.."/>
                    <Item title="Tanggal" type="date" label="dateOrder" placeholder="Masukkan tanggal reservasi.."/>
                    <Item title="Waktu" type="time" label="timeOrder" placeholder="Masukkan waktu reservasi.."/>
                </div>
                <div className="flex flex-row justify-center">
                    <button
                        type="button"
                        className="mt-5 rounded-full px-5 py-2 border bg-primary shadow-sm text-white transition duration-300 hover:shadow-lg"
                    >
                        <Link href="/">
                        <a href="#">Kirim Data</a>
                        </Link>
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Reservation;