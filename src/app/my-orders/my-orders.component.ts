import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders
  constructor(private orderService:OrderService) {
    
   }

   ngOnInit() {
    this.orders= this.orderService.getOrders();
    //console.log(orders);
  }

}
