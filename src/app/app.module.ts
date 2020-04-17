import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {AngularFireAuthModule} from 'angularfire2/auth'
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AuthGuardService } from './authguard.service';
import { AuthAdminService } from './authadmin.service';
let routes=[{path:'',component:HomeComponent},
{path:'products',component:ProductsComponent},
{path:'shopping-cart',component:ShoppingCartComponent},
{path:'admin/orders',component:AdminOrdersComponent,canActivate:[AuthGuardService,AuthAdminService]},
{path:'admin/products',component:AdminProductsComponent,canActivate:[AuthGuardService,AuthAdminService]},
{path:'login',component:LoginComponent},
{path:'my-orders',component:MyOrdersComponent},
{path:'check-out',component:CheckOutComponent,canActivate:[AuthGuardService]}
];
@NgModule({
  //list of components
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductsComponent,
    OrderSuccessComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    MyOrdersComponent,
    CheckOutComponent
  ],
  //list of modules
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)

  ],
  //list of services
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
