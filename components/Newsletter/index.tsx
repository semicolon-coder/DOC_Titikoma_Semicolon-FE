import React from 'react';

function Newsletter() {
  return (
    <div className="mx-8 font-poppins lg:px-16 lg:mx-8 mt-20">
      <h1 className="text-center text-2xl font-bold text-secondary">
        Dapatkan promo terbaru dari TITIKOMA
      </h1>
      <p className="text-center mt-2">
        Kami merekomendasikan anda untuk mendapatkan promo terbaru dari kami
        dengan cara memasukkan E-Mail anda dibawah ini!
      </p>
      <form action="/">
        <div className="flex flex-row justify-center mt-5">
          <input
            className="bg-secondary border rounded-tl-full rounded-bl-full py-2 px-2 lg:px-4 text-white"
            placeholder="Masukkan Email"
            type="text"
            name="email"
          />
          <button
            type="button"
            className="border rounded-tr-full rounded-br-full py-2 px-2 lg:px-4 transition duration-300 hover:bg-primary hover:text-white"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
