import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './products.state';
import { AppState } from '../../../store/app.state';

export const selectProductState = (state: AppState) => state.products;
export const selectAllProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);
