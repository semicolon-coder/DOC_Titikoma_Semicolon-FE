import React from 'react';

function Success() {
  return (
    <div className="p-10 font-poppins mt-10 md:mt-28">
      <h1 className="text-center text-4xl font-extrabold text-primary mb-4">
        Pembayaran Berhasil!
      </h1>
      <div className="flex flex-row justify-center h-80">
        <img className="" src="/icon/order-success-illustration.svg" alt="" />
      </div>
      <h2 className="mt-4 text-center text-3xl font-bold text-primary">
        Terima kasih telah mempercayai TITIKOMA CAFE
      </h2>
      <p className="mt-2 text-center text-xl font-medium text-secondary">
        Mohon ditunggu, pesanan kamu lagi diproses!
      </p>
      <p className="mt-1 text-center text-xl font-medium text-secondary">
        Akan ada email masuk untuk mengkonfirmasi jika pesanan telah selesai!
      </p>
    </div>
  );
}

export default Success;
