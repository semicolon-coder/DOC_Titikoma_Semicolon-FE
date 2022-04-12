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

export interface TestimonialTypes {
  _id: string;
  name: string;
  description: string;
}

export interface ProductTypes {
  _id: string;
  productId: string;
  name: string;
  description: string;
  category: string;
  stock: number;
  status: boolean;
  price: number;
  image: string;
  qty: number;
}

export interface CartTypes extends ProductTypes {
  productId: string;
  _id: string;
  name: string;
  price: number;
  image: string;
  stock: number;
  qty: number;
  total: number;
}
