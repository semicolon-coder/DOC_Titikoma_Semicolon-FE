export interface CategoryTypes {
  _Id: string;
  name: string;
}

export interface ProductCardProps {
  _id: string;
  title: string;
  image: string;
  price: number;
  qty: number;
  onAddClick: () => void;
}

export interface AccumulatorTypes {
  discount: number;
  subtotal: number;
  tax: number;
  total: number;
}

export interface HistoryCartResult {
  price: number;
  qty: number;
  total: number;
}

export interface CartTypes {
  _id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
  total: number;
}