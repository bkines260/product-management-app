import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ProductActions from './products.actions';
import { ProductService } from '../services/product.service';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.loadProducts),
    mergeMap(action => this.productService.getProducts(action.skip, action.limit).pipe(
      map(response => ProductActions.loadProductsSuccess({ response })),
      catchError(error => of(ProductActions.loadProductsFailure({ error })))
    ))
  ));

  addProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.addProduct),
    mergeMap(action => this.productService.addProduct(action.product).pipe(
      map(product => ProductActions.addProductSuccess({ product })),
      catchError(error => of(ProductActions.addProductFailure({ error })))
    ))
  ));

  updateProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.updateProduct),
    mergeMap(action => this.productService.updateProduct(action.product).pipe(
      map(product => ProductActions.updateProductSuccess({ product })),
      catchError(error => of(ProductActions.updateProductFailure({ error })))
    ))
  ));

  deleteProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.deleteProduct),
    mergeMap(action => this.productService.deleteProduct(action.id).pipe(
      map(() => ProductActions.deleteProductSuccess({ id: action.id })),
      catchError(error => of(ProductActions.deleteProductFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) { }
}
