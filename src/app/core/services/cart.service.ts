import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject: BehaviorSubject<Cart>;

  constructor() {
    const savedCart = localStorage.getItem('cart');
    const initialCart: Cart = savedCart ? JSON.parse(savedCart) : { items: [] };
    this.cartSubject = new BehaviorSubject<Cart>(initialCart);
  }

  getCart(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product): void {
    const cart = this.cartSubject.getValue();
    const existingItem = cart.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.items.push({ product, quantity: 1 });
    }
    console.log(cart);
    this.updateCart(cart);
  }

  removeFromCart(productId: number): void {
    const cart = this.cartSubject.getValue();
    cart.items = cart.items.filter(item => item.product.id !== productId);
    this.updateCart(cart);
  }

  clearCart(): void {
    const cart: Cart = { items: [] };
    this.updateCart(cart);
  }

  private updateCart(cart: Cart): void {
    this.cartSubject.next(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
