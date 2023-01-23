export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IProductProps {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
