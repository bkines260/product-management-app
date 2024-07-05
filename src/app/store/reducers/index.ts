import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../app.state';
import { productReducer } from '../../modules/products/store/products.reducer';
import { cartReducer } from '../../modules/cart/store/cart.reducer';

export const reducers: ActionReducerMap<AppState> = {
  products: productReducer,
  cart: cartReducer
};
