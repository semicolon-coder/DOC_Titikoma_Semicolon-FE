import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
}

function ProductCard(props: ProductCardProps) {
  const { title, image, price } = props;
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3 hover:shadow-xl transition duration-300">
      <div className="rounded-lg bg-white shadow-md overflow-hidden">
        <Image
          height={400}
          width={500}
          className="h-64 w-full object-cover"
          src={image}
          alt="product-image"
        />
        <div className="flex flex-row justify-between p-3 px-5">
          <div className="text-left">
            <h1 className="font-semibold">{title}</h1>
            <p>{price}</p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="border rounded-full px-4 py-2 transition duration-300 hover:bg-primary hover:text-white">
              <button type="button">
                <a href="#">Tambah</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
