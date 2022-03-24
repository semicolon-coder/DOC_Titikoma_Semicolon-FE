import Link from 'next/link';
import React from 'react'

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
                    <div className="col-span-12 lg:col-span-4 h-auto flex flex-col mb-3">
                        <label htmlFor="namaCustomer" className="mb-1">Nama<span className="text-red-600">*</span></label>
                        <input
                            className="rounded-full px-4 py-2 border border-gray-500 font-thin text-sm"
                            placeholder="Masukkan Nama Anda..."
                            type="text"
                            name="namaCustomer"
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-4 h-auto flex flex-col mb-3">
                        <label htmlFor="emailCustomer" className="mb-1">Email<span className="text-red-600">*</span></label>
                        <input
                            className="rounded-full px-4 py-2 border border-gray-500 font-thin text-sm"
                            placeholder="Masukkan Email Anda..."
                            type="email"
                            name="emailCustomer"
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-4 h-auto flex flex-col mb-3">
                        <label htmlFor="numberCustomer" className="mb-1">Nomor Telepon<span className="text-red-600">*</span></label>
                        <input
                            className="rounded-full px-4 py-2 border border-gray-500 font-thin text-sm"
                            placeholder="Masukkan Nomor Telepon Aktif Anda..."
                            type="text"
                            name="numberCustomer"
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-4 h-auto flex flex-col mb-3">
                        <label htmlFor="countCustomer" className="mb-1">Jumlah Orang<span className="text-red-600">*</span></label>
                        <input
                            className="rounded-full px-4 py-2 border border-gray-500 font-thin text-sm"
                            placeholder="Masukkan Jumlah Orang..."
                            type="text"
                            name="countCustomer"
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-4 h-auto flex flex-col mb-3">
                        <label htmlFor="dateOrder" className="mb-1">Tanggal<span className="text-red-600">*</span></label>
                        <input
                            className="rounded-full px-4 py-2 border border-gray-500 font-thin text-sm"
                            placeholder="Masukkan Waktu Reservasi..."
                            type="date"
                            name="dateOrder"
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-4 h-auto flex flex-col mb-3">
                        <label htmlFor="timeOrder" className="mb-1">Waktu<span className="text-red-600">*</span></label>
                        <input
                            className="rounded-full px-4 py-2 border border-gray-500 font-thin text-sm"
                            placeholder="Masukkan Waktu Reservasi..."
                            type="time"
                            name="timeOrder"
                        />
                    </div>
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