import { toast } from 'react-toastify';
import { CartTypes } from '../../services/data-types';

export default function EditItem(
  cart: CartTypes[],
  itemId: string,
  amount: number,
  name: string
) {
  let cartCopy = [...cart];
  const existentItem = [...cart].find((item) => item._id === itemId);

  if (existentItem) {
    existentItem.qty += amount;

    if (existentItem.qty <= 0) {
      cartCopy = cartCopy.filter((item) => item._id !== itemId);
    }

    toast.success(
      `Berhasil mengubah jumlah menu ${name} menjadi ${existentItem.qty}.`
    );

    return cartCopy;
  }
}
