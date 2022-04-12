import { toast } from 'react-toastify';
import { CartTypes } from '../../services/data-types';

export default function RemoveItem(
  cart: CartTypes[],
  itemId: string,
  name: string
) {
  let cartCopy = [...cart];

  cartCopy = cartCopy.filter((item) => item._id !== itemId);

  toast.success(`Berhasil menghapus ${name}.`);
  return cartCopy;
}
