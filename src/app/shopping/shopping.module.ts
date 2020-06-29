import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormsModule } from 'ng2-validation';
import { RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ShoppingCardSummaryComponent } from './components/shopping-card-summary/shopping-card-summary.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ProductsComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    CheckOutComponent,
    ProductFilterComponent,
    ShoppingCardSummaryComponent],
  imports: [
    SharedModule
  ]
})
export class ShoppingModule { }
