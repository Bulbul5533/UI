import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';
import { UIHomeComponent } from './uihome/uihome.component';

const routes: Routes = [
  { path: '', component: UIHomeComponent },
  { path: 'MainHome', component: UIHomeComponent },
  { path: 'ShowProduct', component: ShowProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
