import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'addProduct' , component: ProductAddComponent },
  { path: 'listProduct' , component: ProductListComponent },
  { path: 'contactUs' , component: ContactUsComponent },
  { path: 'addProduct/:productId' , component: ProductAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
