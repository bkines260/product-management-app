export interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  description: string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  createdDate: string;
}
export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
