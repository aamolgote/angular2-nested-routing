import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../orders.service';
import { Order } from './../orders.model';
@Component({
  selector: 'app-orders-completed',
  templateUrl: './completed-orders.component.html'
})
export class CompletedOrdersComponent implements OnInit {
  private orders: Order[];
  private errorMessage: any;
  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.getOrders();
    console.log("Getting Orders");
  }

  getOrders() {
    this.ordersService.getOrders()
      .subscribe(
      orders => this.orders = orders,
      error => this.errorMessage = <any>error
      );
  }

}
