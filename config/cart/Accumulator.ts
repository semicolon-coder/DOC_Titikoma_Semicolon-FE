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
    const subtotalRaw = historyCart[0].price * historyCart[0].qty;
    const subtotalSubtDisc = subtotalRaw - discount;
    const taxResult = subtotalSubtDisc * (tax / 100);
    const totalResult = subtotalSubtDisc + taxResult;

    return {
      discount,
      subtotal: subtotalRaw,
      tax: taxResult,
      total: totalResult,
    };
  }

  const subtotalRaw = historyCart
    .map((item: HistoryCartResult) => item.total)
    .reduce((a: number, b: number) => a + b, 0);
  const subtotalSubtDisc = subtotalRaw - discount;
  const taxResult = subtotalSubtDisc * (tax / 100);
  const totalResult = subtotalSubtDisc + taxResult;

  return {
    discount,
    subtotal: subtotalRaw,
    tax: taxResult,
    total: totalResult,
  };
}
