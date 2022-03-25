import React from 'react';
import Item from './Item';

function InputCustomer() {
  return (
    <>
      <div className="mx-8 lg:px-16 lg:mx-8 py-5 text-center md:text-left">
        <div className="border-b">
          <h1 className="text-3xl font-bold mb-1 text-secondary">
            Data Pelanggan
          </h1>
        </div>
      </div>
      <div className="flex flex-col mx-8 lg:px-16 lg:mx-8 py-5 text-left font-poppins">
        <form action="">
          <div className="grid grid-cols-12 gap-6">
            <Item title="Nama" type="text" label="nameCustomer" placeholder="Masukkan nama anda..." />
            <Item title="Email" type="email" label="emailCustomer" placeholder="Masukkan email aktif anda.." />
            <Item
              title="Nomor Telfon"type="text" label="numberCustomer" 
              placeholder="Masukkan nomor telfon aktif anda.."
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default InputCustomer;
