import React from 'react';

interface FormTestimonialProps {
  title: string;
  placeholder: string;
  onChangeInput: (event: any) => any;
}

function FormTestimonial(props: FormTestimonialProps) {
  const { title, placeholder, onChangeInput } = props;

  return (
    <div className="h-auto flex flex-col mb-3">
      <label htmlFor="nameCustomer" className="mb-1">
        {title}
        <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        className="rounded-full px-4 py-2 border border-gray-500 font-thin text-sm"
        placeholder={placeholder}
        onChange={onChangeInput}
      />
    </div>
  );
}

export default FormTestimonial;
