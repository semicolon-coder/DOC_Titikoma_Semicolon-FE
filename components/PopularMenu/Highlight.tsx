import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';

interface HighlightProps {
  name: string;
  title: string;
  description: string;
  image: string;
  href: string;
  isImageInLeft?: boolean;
}

function Highlight(props: Partial<HighlightProps>) {
  const { name, title, description, image, href, isImageInLeft } = props;
  const classNames = cx({
    'col-span-12': true,
    'mt-20': true,
    'rounded-lg': true,
    'bg-white': true,
    'shadow-md': true,
    'overflow-hidden': true,
    'md:flex': true,
    'md:flex-row': isImageInLeft,
    'md:flex-row-reverse': !isImageInLeft,
  });

  return (
    <div className={classNames}>
      <Image
        height={300}
        width={700}
        className="h-64 md:h-72 w-full object-cover md:w-2/3"
        src={image!}
        alt="product-image"
      />
      <div className="md:flex md:flex-col justify-center">
        <div className="p-4 text-center md:px-24">
          <h1 className="font-bold text-xl">
            {title} <span className="text-primary">{name}</span>
          </h1>
          <p className="mt-3">{description}</p>
          <button
            type="button"
            className="mt-6 py-2 px-6 bg-primary rounded-full text-white shadow-md hover:shadow-xl transition duration-300"
          >
            <Link href={href!}>
              <a>Beli Sekarang</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
