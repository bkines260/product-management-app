import { Component, Input } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.state';
import { addToCart } from '../../../cart/store/cart.actions';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product!: Product;
  constructor(public dialog: MatDialog,private store: Store<AppState>){}
  openDialog() {
    const dialogRef = this.dialog.open(ProductDetailsComponent,
      {
        data: { product: this.product }
      }
    );
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  addToCart(product: Product): void {
    this.store.dispatch(addToCart({ product: product , quantity: 1}));
  }
}
