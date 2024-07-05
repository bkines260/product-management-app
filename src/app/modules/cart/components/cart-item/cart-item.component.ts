import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { CartItem } from '../../../../core/models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;
  @Output() removeItem : EventEmitter<void> = new EventEmitter<void>();

}
