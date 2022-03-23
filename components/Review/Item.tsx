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
    <div className="col-span-12 md:col-span-6 2xl:col-span-3 bg-white rounded-lg p-5">
      <div className="ml-2 flex text-center flex-col">
        <img
          className="w-16 h-16 object-cover m-auto rounded-md"
          src={image}
          alt=""
        />
        <h1 className="font-semibold text-lg">{name}</h1>
        <p className="font-thin">{profession}</p>
      </div>
      <p className="mt-5 text-center mx-5">{review}</p>
    </div>
  );
}

export default Item;
