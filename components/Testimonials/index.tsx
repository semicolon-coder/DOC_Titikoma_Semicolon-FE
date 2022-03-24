import React from 'react'
import Item from './item';

function Testimonials() {
  return (
    <div>
      <div className="mx-8 lg:px-16 lg:mx-8 py-5 text-center md:text-left">
            <div className="border-b">
            <h1 className="text-3xl font-bold mb-1 text-secondary">Testimonial dari pelanggan</h1>
            </div>
      </div>
        <div className="grid grid-cols-12 gap-6 mx-8 font-poppins lg:px-16 lg:mx-8 my-10">
          <Item
            name="Ryan Adi Saputra"
            profession="Freelance"
            review="Titikoma; memang terbaik, minuman dan makanan disini cukup
              terjangkau bagi kantong anak muda serta pelayanan yang modern,
              berbeda dengan kafe lain pada umumnya. Wajib datang, kalian pasti
              tidak akan kecewa."
            image="/images/ryandmasiv.jpg"
          />
          <Item
            name="Nathanael"
            profession="Manager"
            review="Sering hangout bareng temen disini dan emang suasananya asik
              banget. Paling suka sama Honey Pancake disini, lembut sama madunya
              manis semanis aku, xixixi. Pokok terdebest deh kalau kesini,
              recommended banget donggg."
            image="/images/person1.jpg"
          />
          <Item
            name="Harits"
            profession="Desainer"
            review="Ngopi disini sambil garap kerjaan kantor memang dapat diandalkan,
              wifi cepet, tempat nyaman, dan pastinya ada coworking spacenya
              yang pasti aman. Cafe jaman now yang gua rekom buat kalian yang
              pingin WFH."
            image="/images/person2.jpg"
          />
          <Item
            name="Cassie"
            profession="Desainer"
            review="Ngopi disini sambil garap kerjaan kantor memang dapat diandalkan,
              wifi cepet, tempat nyaman, dan pastinya ada coworking spacenya
              yang pasti aman. Cafe jaman now yang gua rekom buat kalian yang
              pingin WFH."
            image="/images/person3.jpg"
          />
        </div>
    </div>
  );
}

export default Testimonials;