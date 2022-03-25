import React from 'react';
import NumberFormat from 'react-number-format';

interface ItemCalculationProps {
  title: string;
  value: number;
}

function ItemCalculation(props: ItemCalculationProps) {
  const { title, value } = props;
  return (
    <div className="flex justify-between border-b">
      <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
        {title}
      </div>
      <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
        <NumberFormat
          value={value}
          prefix="Rp. "
          displayType="text"
          thousandSeparator="."
          decimalSeparator=","
        />
      </div>
    </div>
  );
}

export default ItemCalculation;
