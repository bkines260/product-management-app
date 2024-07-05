import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { CartItem } from '../../../core/models/cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartItems$: any;
  totalCart = 0;
  constructor(private store: Store<AppState>,private router: Router) {
    this.cartItems$ = store.select(state => state.cart.items);
    this.cartItems$.subscribe((items: CartItem[])=>{
      this.totalCart= 0;
      items.map((el:CartItem)=>{
        this.totalCart += el.quantity
      })
    })
  }
  goTo(path: string) {
    this.router.navigate([path])
  }
}
