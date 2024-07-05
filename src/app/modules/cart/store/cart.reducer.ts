import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';
import { Cart, CartItem } from '../../../core/models/cart.model';
import { CartState } from './cart.state';


const savedCart = localStorage.getItem('cart');
const initialCart: Cart = savedCart ? JSON.parse(savedCart) : { items: [] };
export const initialState: CartState = initialCart;

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addToCart, (state, { product , quantity}) => {
    const existingItem = state.items.find(item => item.product.id === product.id);
    let items = []
    if (existingItem) {
      items = state.items.map(item =>item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
    }
    else {
      items = [...state.items, { product, quantity: quantity }]
    }
    localStorage.setItem('cart', JSON.stringify({items: items}));
    return {
      ...state,
      items: items
    };
  }),
  on(CartActions.removeFromCart, (state, { productId }) => {
    const items =state.items.filter(item => item.product.id !== productId);
    localStorage.setItem('cart', JSON.stringify({items: items}));
    return {
      ...state,
      items: items
    }
  }),
  on(CartActions.clearCart, state => {
    localStorage.setItem('cart', JSON.stringify({items: []}));
    return {
      ...state, items: []
    }
  })
);

