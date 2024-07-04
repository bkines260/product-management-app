import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";


const routes: Routes = [
  {
    path: '',
    children : [
      {
        path: '',
        component : ProductListComponent
      },
      {
        path: 'new',
        component: ProductFormComponent
      },
      {
        path: ':id',
        component: ProductDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class productsRoutingModule {}
