import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  

  ngOnInit() {
  }

  orders$;
  
  constructor(
    private authService: AuthService,
    private orderService: OrderService) { 
    
    //this.orders$ = authService.user.switchMap(u => orderService.getOrdersByUser(u.uid));
  }
}
