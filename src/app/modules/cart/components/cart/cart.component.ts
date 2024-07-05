import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem } from '../../../../core/models/cart.model';
import { AppState } from '../../../../store/app.state';
import { clearCart, removeFromCart } from '../../store/cart.actions';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;

  constructor(private store: Store<AppState>) {
    this.cartItems$ = store.select(state => state.cart.items);
  }

  ngOnInit(): void {}

  removeItem(productId: number): void {
    this.store.dispatch(removeFromCart({ productId }));
  }

  clearCart(): void {
    this.store.dispatch(clearCart());
  }
}
