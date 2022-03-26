import React, { useState } from 'react';
import Item from './Item';

function InputCustomer() {
  const [userDataName, setUserDataName] = useState('');
  const [userDataEmail, setUserDataEmail] = useState('');
  const [userDataPhone, setUserDataPhone] = useState('');

  const userData = {
    name: userDataName,
    email: userDataEmail,
    phoneNumber: userDataPhone,
  };

  if (typeof window !== 'undefined') {
    localStorage.setItem('user-data', JSON.stringify(userData));
  }

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
            <Item
              title="Nama"
              placeholder="Masukkan nama anda..."
              onInputUserData={(event: { target: { value: string } }) => setUserDataName(event.target.value)}
            />
            <Item
              title="Email"
              placeholder="Masukkan email aktif anda.."
              onInputUserData={(event: { target: { value: string } }) => setUserDataEmail(event.target.value)}
            />
            <Item
              title="Nomor Telfon"
              placeholder="Masukkan nomor telfon aktif anda.."
              onInputUserData={(event: { target: { value: string } }) => setUserDataPhone(event.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default InputCustomer;
