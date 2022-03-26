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

export interface HistoryCartResult {
  price: number;
  qty: number;
  total: number;
}

export interface CartTypes {
  productId: string;
  _id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
  total: number;
}

export interface CategoryTypes {
  _id: string;
  name: string;
}

export interface TestimonialTypes {
  _id: string;
  name: string;
  description: string;
}
