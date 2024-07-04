import { EntityState } from '@ngrx/entity';
import { Product } from '../../../core/models/product.model';

export interface ProductState extends EntityState<Product> {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
  error: any;
}
