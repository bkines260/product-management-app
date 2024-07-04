import { Component, Input } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product!: Product;
  addToCart(product : Product){}
  constructor(public dialog: MatDialog){}
  openDialog() {
    const dialogRef = this.dialog.open(ProductDetailsComponent,
      {
        data: { product: this.product }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
