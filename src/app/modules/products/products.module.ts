import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from './store/products.reducer';
import { ProductEffects } from './store/products.effects';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductFormComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    productsRoutingModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects]),
    SharedModule
  ]
})

export class ProductsModule { }
