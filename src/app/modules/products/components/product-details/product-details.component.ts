import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../../../core/models/product.model';
import { addToCart } from '../../../cart/store/cart.actions';
import { AppState } from '../../../../store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  value: number = 1;
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<AppState>
  ) {}

  increment() {
    this.value++;
  }

  decrement() {
    if (this.value > 1) {
      this.value--;
    }
  }
  addToCart(): void {
    this.store.dispatch(addToCart({ product: this.data.product, quantity: this.value}));
    this.dialogRef.close();
  }

}
