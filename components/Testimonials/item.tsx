import React from 'react';

interface ItemProps {
  name: string;
  profession: string;
  review: string;
  image: string;
}

function Item(props: ItemProps) {
  const { name, profession, review, image } = props;
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3">
      <div className="rounded-lg bg-white shadow-md overflow-hidden p-5 hover:shadow-xl transition duration-300">
        <div className="flex flex-col text-center">
          <img
            className="w-16 h-16 object-cover m-auto rounded-md"
            src={image}
            alt=""
          />
          <h1 className="mb-2 text-xl font-semibold">{name}</h1>
          <p className="font-thin">{profession}</p>
          <p className="mt-2">{review}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
