import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './products.actions';
import { createEntityAdapter } from '@ngrx/entity';
import { Product } from '../../../core/models/product.model';
import { ProductState } from './products.state';

export const productsAdapter = createEntityAdapter<Product>();

const initialState :ProductState  = productsAdapter.getInitialState({
  products: [],
  total: 0,
  skip: 0,
  limit: 30,
  error: null
});

export const productReducer = createReducer(
  initialState,
    on(ProductActions.loadProductsSuccess, (state, { response }) =>
    productsAdapter.setAll(response.products, {
      ...state,
      total: response.total,
      skip: response.skip,
      limit: response.limit,
      products : response.products
    })
  ),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({ ...state, error })),
  on(ProductActions.addProductSuccess, (state, { product }) => ({ ...state, products: [...state.products, product] })),
  on(ProductActions.addProductFailure, (state, { error }) => ({ ...state, error })),
  on(ProductActions.updateProductSuccess, (state, { product }) => ({
    ...state,
    products: state.products.map(p => p.id === product.id ? product : p)
  })),
  on(ProductActions.updateProductFailure, (state, { error }) => ({ ...state, error })),
  on(ProductActions.deleteProductSuccess, (state, { id }) => ({
    ...state,
    products: state.products.filter(p => p.id !== id)
  })),
  on(ProductActions.deleteProductFailure, (state, { error }) => ({ ...state, error }))
);
