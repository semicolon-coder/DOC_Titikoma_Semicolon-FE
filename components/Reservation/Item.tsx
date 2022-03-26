import React from 'react';

interface ItemProps {
  title: string;
  type: string;
  label: string;
  placeholder: string;
}

function Item(props: ItemProps) {
  const {
    title, type, label, placeholder,
  } = props;
  return (
    <div className="col-span-12 lg:col-span-4 h-auto flex flex-col mb-3">
      <label className="mb-1" htmlFor={label}>
        {title}
        <span className="text-red-600">*</span>
      </label>
      <input
        type={type}
        className="rounded-full px-4 py-2 border border-gray-500 font-thin text-sm"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Item;
