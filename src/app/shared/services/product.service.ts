import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase,private router:Router) { }

  //save product into db
  create(product)
  {
      this.db.list("/products/").push(product);
     this.router.navigate(['/admin/products/']);
  }

  get(id)
  {
    return this.db.object("/products/"+id)
  }

  update(id,product)
  {
    this.db.object("/products/"+id).update(product);
    this.router.navigate(['/admin/products/']);
  }

  delete(id)
  {
    this.db.object("/products/"+id).remove();
    this.router.navigate(['/admin/products/']);
  }
  getAll()
  {
    return this.db.list("/products/");
  }
}
