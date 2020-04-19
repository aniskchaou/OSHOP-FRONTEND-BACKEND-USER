import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
import { AuthService } from '../../auth.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  orders
  constructor(private orderService:OrderService,private authService:AuthService) { }

  ngOnInit() {
    this.orders= this.orderService.getOrdersByUser(this.authService.user.uid);
    console.log(this.orders);
  }

}
