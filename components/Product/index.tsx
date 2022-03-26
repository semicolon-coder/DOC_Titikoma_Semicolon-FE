import React from 'react';
import Image from 'next/image';
import NumberFormat from 'react-number-format';
import { ProductCardProps } from '../../services/data-types';

function ProductCard(props: ProductCardProps) {
  const {
    title, image, price, onAddClick,
  } = props;

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3">
      <div className="rounded-lg bg-white shadow-md overflow-hidden hover:shadow-xl transition duration-300">
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
            <p>
              <NumberFormat
                value={price}
                prefix="Rp. "
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
              />
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="border rounded-full px-4 py-2 transition duration-300 hover:bg-primary hover:text-white">
              <button type="button" onClick={onAddClick}>
                <a>Tambah</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
