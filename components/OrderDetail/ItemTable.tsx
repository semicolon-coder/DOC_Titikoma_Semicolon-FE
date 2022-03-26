import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import Image from 'next/image';

interface ItemTableProps {
  image: string;
  name: string;
  price: number;
  qty: number;
  onBtnAdd: () => void;
  onBtnSubt: () => void;
  onBtnDelete: () => void;
}

function ItemTable(props: ItemTableProps) {
  const {
    image, name, price, qty, onBtnAdd, onBtnSubt, onBtnDelete,
  } = props;
  const [qtyValue, setQtyValue] = useState(qty);

  const addition = () => {
    onBtnAdd();
    setQtyValue(parseInt(String(qtyValue), 10) + 1);
  };

  const subtraction = () => {
    if (qtyValue > 1) {
      onBtnSubt();
      setQtyValue(parseInt(String(qtyValue), 10) - 1);
    } else {
      setQtyValue(1);
    }
  };

  const deleteItem = () => {
    onBtnDelete();
  };

  return (
    <tr className="bg-white border-b">
      <td className="py-4 px-6 text-sm font-medium text-gray-800 whitespace-nowrap">
        <div className="w-[100px] h-[80px] rounded-lg">
          <Image
            objectFit="cover"
            width={100}
            height={80}
            className="overflow-hidden rounded-lg"
            src={image}
            alt="product-img"
          />
        </div>
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-800 whitespace-nowrap">
        {name}
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-800 whitespace-nowrap">
        <NumberFormat
          value={price}
          prefix="Rp. "
          displayType="text"
          thousandSeparator="."
          decimalSeparator=","
        />
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-800 whitespace-nowrap">
        <div className="flex w-24">
          <button
            type="button"
            className="border-y border-l border-gray-400 rounded-l-md p-1"
            onClick={subtraction}
          >
            <svg
              className="w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12H4"
              />
            </svg>
          </button>
          <input
            type="text"
            name="qty"
            value={qtyValue}
            className="border border-gray-400 p-1 text-sm text-center w-full"
            onChange={(event) => setQtyValue(parseInt(event.target.value, 10))}
            disabled
          />
          <button
            type="button"
            className="border-y border-r border-gray-400 rounded-r-md p-1"
            onClick={addition}
          >
            <svg
              className="w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-800 whitespace-nowrap">
        <NumberFormat
          value={price * qtyValue}
          prefix="Rp. "
          displayType="text"
          thousandSeparator="."
          decimalSeparator=","
        />
      </td>
      <td className="py-4 px-6 text-md font-medium text-gray-800 whitespace-nowrap">
        <a className="flex flex-row justify-center">
          <button type="button" onClick={deleteItem}>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </a>
      </td>
    </tr>
  );
}

export default ItemTable;
