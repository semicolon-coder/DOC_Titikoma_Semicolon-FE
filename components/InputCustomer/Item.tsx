import React from 'react';

interface ItemProps {
  title: string;
  placeholder: string;
  onInputUserData: (event: any) => any;
}

function Item(props: ItemProps) {
  const { title, placeholder, onInputUserData } = props;
  return (
    <div className="col-span-12 lg:col-span-4 h-auto flex flex-col mb-1">
      <label className="mb-1" htmlFor="email">
        {title}
        <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        className="rounded-full px-4 py-2 border border-gray-500 font-thin text-sm"
        placeholder={placeholder}
        onChange={onInputUserData}
      />
    </div>
  );
}

export default Item;
