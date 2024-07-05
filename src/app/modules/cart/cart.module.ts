import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { cartRoutingModule } from './cart-routing.module';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart.reducer';
import { SharedModule } from '../../shared/shared.module';
import { CartItemComponent } from './components/cart-item/cart-item.component';



@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    cartRoutingModule,
    StoreModule.forFeature('cart', cartReducer),
    SharedModule
  ]
})
export class CartModule { }
