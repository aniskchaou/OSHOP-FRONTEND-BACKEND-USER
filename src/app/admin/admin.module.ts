import { AuthAdminService } from './services/authadmin.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ShoppingModule } from '../shopping/shopping.module';

@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    AddProductComponent
  ],
  imports: [
    SharedModule,
    ShoppingModule,
    
  ],providers:[
    AuthAdminService
  ]
})
export class AdminModule { }
