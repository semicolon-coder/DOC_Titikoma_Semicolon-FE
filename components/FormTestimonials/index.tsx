import React from 'react';
import Link from 'next/link';

function FormTestimonials() {
  return (
    <div>
        <div className="mx-8 lg:px-16 lg:mx-8 py-5 text-center md:text-left">
            <div className="border-b">
                <h1 className="text-3xl font-bold mb-1 text-secondary">Tulis Testimonial</h1>
            </div>
        </div>

        <div className="flex flex-col mx-8 lg:px-16 lg:mx-8 py-5 text-left">
          <form action="/">
            <div className="h-auto flex flex-col mb-3">
              <label htmlFor="nameCustomer" className="mb-1">Nama<span className="text-red-600">*</span></label>
              <input type="text" className="rounded-full px-4 py-2 border border-gray-500 font-thin text-sm" placeholder="Masukkan nama Anda..." />
            </div>
            <div className="h-auto flex flex-col mb-3">
              <label htmlFor="emailCustomer" className="mb-1">Email<span className="text-red-600">*</span></label>
              <input type="email" className="rounded-full px-4 py-2 border border-gray-500 font-thin text-sm" placeholder="Masukkan email Anda..." />
            </div>
            <div className="flex flex-col justify-center">
              <label htmlFor="testimonial" className="mb-1">Testimonial/Review untuk TITIKOMA</label>
              <textarea name="testimonials" id="testimonials" className="rounded-2xl px-4 py-2 border border-gray-500 font-thin text-sm" placeholder="Tuliskan review/kritik/saranmu disini..."></textarea>
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

export default FormTestimonials;