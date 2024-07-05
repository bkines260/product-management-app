import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';
import { Product} from '../../../../core/models/product.model';
import { AppState } from '../../../../store/app.state';
import { loadProducts } from '../../store/products.actions';
import { selectAllProducts } from '../../store/products.selector';
import { MatDialog } from '@angular/material/dialog';
import { addToCart } from '../../../cart/store/cart.actions';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  total$: Observable<number>;
  canLoadMore$: Observable<boolean>;
  skip: number = 0;
  limit: number  = 30;

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.pipe(select(selectAllProducts));
    this.products$ = store.select(state => state.products.products);
    this.total$ = store.select(state => state.products.total);
    this.canLoadMore$ = combineLatest([this.products$, this.total$]).pipe(
      map(([products, total]) => this.skip + this.limit < total)
    );
  }

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(): void {
    this.store.dispatch(loadProducts({ skip: this.skip, limit: this.limit }));
  }

  loadMore(): void {
    this.skip += this.limit;
    this.loadProducts();
  }

  getDiscountLabel(product: Product): string {
    if (product.price < 10) return 'Vente Flash';
    if (product.price < 50) return `Promotion: ${product.discountPercentage}%`;
    if (new Date(product.createdDate).getTime() > Date.now() - 3 * 24 * 60 * 60 * 1000) return 'Nouveau';
    return '';
  }
}
