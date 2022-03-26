import React from 'react';

function ContactUs() {
  return (
    <div>
      <div className="mx-8 lg:px-16 lg:mx-8 py-5 text-center md:text-left">
        <div className="border-b">
          <h1 className="text-3xl font-bold mb-1 text-secondary">
            Kontak Kami
          </h1>
        </div>
      </div>
      <div className="flex flex-col mx-8 lg:px-16 lg:mx-8 py-5 text-left">
        <h1 className="font-semibold mb-2">
          Untuk dukungan dan pertanyaan tentang situs web atau aplikasi, hubungi
          contact@titikoma.coffee.
        </h1>
        <p className="mb-2">
          Pertanyaan, komentar, dan permintaan mengenai kebijakan privasi kami
          harus ditujukan kepada Departemen Hukum, PT. Titikoma, Ketintang,
          Gayungan, Surabaya 60231 atau melalui email di legal@titikoma.coffee
        </p>
        <p>
          Kami percaya apa yang kami lakukan setiap hari membawa kebahagiaan. Di
          Titikoma, Anda tidak hanya membangun karir, Anda akan menemukan
          kualitas dan filosofi kopi dan inovasi yang menyenangkan.
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
