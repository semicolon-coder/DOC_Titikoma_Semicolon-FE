import React, { useEffect, useState, useCallback } from 'react';
import {useRouter} from 'next/router';
import { toast } from 'react-toastify';
import Item from './Item';
import { addTestimonial, getAllTestimonial } from '../../services/api';
import { TestimonialTypes } from '../../services/data-types';
import FormTestimonial from '../FormTestimonial';

function Testimonials() {
  const router = useRouter();
  const [testimonialName, setTestimonialName] = useState('');
  const [testimonialEmail, setTestimonialEmail] = useState('');
  const [testimonialDescription, setTestimonialDescription] = useState('');
  const [dataTestimonial, setDataTestimonial] = useState([]);

  const getDataTestimonialFromAPI = async () => {
    const data = await getAllTestimonial();
    setDataTestimonial(data.data);
  };

  const addDataTestimonialToAPI = useCallback(async (data) => {
    await addTestimonial(data)
      .then((r) => {
        router.reload();
        toast.success('Terima kasih atas masukkannya!');
      })
      .catch(() => {
        toast.error('Testimonial gagal dikirim!');
      });
  }, []);

  const addTestimonialData = async () => {
    if (
      testimonialName === '' ||
      testimonialEmail === '' ||
      testimonialDescription === ''
    ) {
      toast.error('Mohon isi data testimonial terlebih dahulu!');
    } else {
      const data = {
        name: testimonialName,
        email: testimonialEmail,
        description: testimonialDescription,
      };
      addDataTestimonialToAPI(data);
    }
  };

  useEffect(() => {
    getDataTestimonialFromAPI();
  }, []);

  return (
    <>
      <div className="mx-8 lg:px-16 lg:mx-8 py-5 text-center md:text-left">
        <div className="border-b">
          <h1 className="text-3xl font-bold mb-1 text-secondary">
            Testimonial dari pelanggan
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mx-8 font-poppins lg:px-16 lg:mx-8 my-10">
        {dataTestimonial.map((item: TestimonialTypes) => (
          <Item key={item._id} name={item.name} review={item.description} />
        ))}
      </div>
      <div className="mx-8 lg:px-16 lg:mx-8 py-5 text-center md:text-left">
        <div className="border-b">
          <h1 className="text-3xl font-bold mb-1 text-secondary">
            Tulis Testimonial
          </h1>
        </div>
      </div>
      <div className="flex flex-col mx-8 lg:px-16 lg:mx-8 py-5 text-left">
        <FormTestimonial
          title="Nama"
          placeholder="Masukkan nama Anda..."
          onChangeInput={(event: { target: { value: string } }) =>
            setTestimonialName(event.target.value)
          }
        />
        <FormTestimonial
          title="Email"
          placeholder="Masukkan email Anda..."
          onChangeInput={(event: { target: { value: string } }) =>
            setTestimonialEmail(event.target.value)
          }
        />
        <FormTestimonial
          title="Testimonial/review untuk TITIKOMA"
          placeholder="Masukkan review/kritik/saranmu disini..."
          onChangeInput={(event: { target: { value: string } }) =>
            setTestimonialDescription(event.target.value)
          }
        />
        <div className="flex flex-row justify-center">
          <button
            type="submit"
            className="mt-5 rounded-full px-5 py-2 border bg-primary shadow-sm text-white transition duration-300 hover:shadow-lg"
            onClick={addTestimonialData}
          >
            <a>Kirim Data</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
