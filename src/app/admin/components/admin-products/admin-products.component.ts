import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products
  
  constructor(private productService:ProductService ) { 
    this.products=this.productService.getAll();
    
  }

  ngOnInit() {
  }

}
