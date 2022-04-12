import { toast } from 'react-toastify';
import { ProductTypes } from '../../services/data-types';

export default function AddItem(
  cart: ProductTypes[],
  item: ProductTypes,
  name: string
) {
  item.qty = 1;
  const cartCopy = [...cart];

  const existingItem = cartCopy.find(
    (cartItem: ProductTypes) => cartItem._id === item._id
  );

  if (existingItem) {
    existingItem.qty += item.qty;
  } else {
    cartCopy.push(item);
  }

  toast.success(`Berhasil menambahkan ${name} ke dalam keranjang!`);
  return cartCopy;
}
