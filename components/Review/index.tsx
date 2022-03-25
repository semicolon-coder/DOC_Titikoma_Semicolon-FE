import React from 'react';
import Item from './Item';

function Review() {
  return (
    <div className="mt-20 bg-primary/20 w-full py-8">
      <div className="lg:flex lg:flex-row lg:justify-evenly mx-8 font-poppins lg:px-16">
        <div className="flex flex-col justify-center lg:mr-20">
          <div className="my-5 lg:w-80">
            <h1 className="text-center text-xl font-extrabold text-secondary">
              Apa kata pelanggan kami tentang
              <span className="text-primary"> kualitas TITIKOMA</span>
            </h1>
            <p className="text-center mt-2">
              Kami sangat mengedepankan pelayanan dan kualitas. Mari kita lihat
              beberapa orang yang memberikan ulasan terhadap TITIKOMA.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
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
    </div>
  );
}

export default Review;
