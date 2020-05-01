import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories;

  @Input('category')
  selectedCategory;

  constructor(private categorieService:CategoryService) {
    this.categories=this.categorieService.getCategories();
   }

  ngOnInit() {
  }

}
