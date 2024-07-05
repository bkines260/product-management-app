import { CartState } from "../modules/cart/store/cart.state";
import { ProductState } from "../modules/products/store/products.state";

export interface AppState {
  products: ProductState;
  cart: CartState
}
