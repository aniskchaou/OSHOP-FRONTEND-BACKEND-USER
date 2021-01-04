import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {AngularFireAuthModule} from 'angularfire2/auth'
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';
import { AuthGuardService } from './shared/services/authguard.service';
import {FormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';
import { ProductFilterComponent } from './shopping/components/product-filter/product-filter.component';
import { ShoppingCardSummaryComponent } from './shopping/components/shopping-card-summary/shopping-card-summary.component'
import { SharedModule } from './shared/shared.module';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { AuthAdminService } from './admin/services/authadmin.service';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { AddProductComponent } from './admin/components/add-product/add-product.component';
import { ShoppingModule } from './shopping/shopping.module';
import { ProductsComponent } from './shopping/components/products/products.component';

//routes
let routes=[
{path:'',component:ProductsComponent},
{path:'products',component:ProductsComponent},
{path:'shopping-cart',component:ShoppingCartComponent},
{path:'admin/orders',component:AdminOrdersComponent},
{path:'admin/products',component:AdminProductsComponent},
{path:'admin/addproduct',component:AddProductComponent},
{path:'admin/addproduct/:id',component:AddProductComponent},
{path:'order-success/:id',component:OrderSuccessComponent},
{path:'login',component:LoginComponent},
{path:'my-orders',component:MyOrdersComponent},
{path:'check-out',component:CheckOutComponent}
];


//module= component+module+service
@NgModule({
  //list of components
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
  ],

  //list of modules
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, //firebase database
    AngularFireAuthModule, //firebase auth
    RouterModule.forRoot(routes),//route
    SharedModule,//shared module
    ShoppingModule, //shopping module
    AdminModule//admin
  ],

  //list of services
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],//link by default
 
  bootstrap: [AppComponent] //main component
})
export class AppModule { }
