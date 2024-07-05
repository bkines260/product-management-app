import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from "./components/cart/cart.component";


const routes: Routes = [
  {
    path: '',
    children : [
      {
        path: '',
        component : CartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class cartRoutingModule {}
