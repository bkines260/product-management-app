import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../app.state';
import { productReducer } from '../../modules/products/store/products.reducer';

export const reducers: ActionReducerMap<AppState> = {
  products: productReducer,
};
