import { CartTypes, HistoryCartResult } from '../../services/data-types';

export default function accumulator(
  localCartJSON: CartTypes,
  discount: number,
  tax: number
) {
  // @ts-ignore
  const historyCart = localCartJSON.map(
    (item: { price: number; qty: number }) => ({
      price: item.price,
      qty: item.qty,
      total: item.price * item.qty,
    })
  );

  if (historyCart.length === 1) {
    return {
      subtotal: historyCart[0].price * historyCart[0].qty,
      discount,
      tax: (historyCart[0].price * historyCart[0].qty - discount) * (tax / 100),
      total:
        historyCart[0].price * historyCart[0].qty +
        (historyCart[0].price * historyCart[0].qty - discount) * (tax / 100),
    };
  }

  const subtotalResult = historyCart
    .map((item: HistoryCartResult) => item.total)
    .reduce((a: number, b: number) => a + b, 0);
  const taxResult = (subtotalResult - discount) * (tax / 100);
  const totalResult = subtotalResult + taxResult;
  return {
    discount,
    subtotal: subtotalResult,
    tax: taxResult,
    total: totalResult,
  };
}
