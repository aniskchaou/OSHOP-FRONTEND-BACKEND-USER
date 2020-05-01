import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';
import { OrderService } from './services/order.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    CustomFormsModule,
  ],
  exports:[ 
    ProductCardComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    CustomFormsModule],
  providers:[OrderService,CategoryService,ProductService,
   ]
})
export class SharedModule { }
