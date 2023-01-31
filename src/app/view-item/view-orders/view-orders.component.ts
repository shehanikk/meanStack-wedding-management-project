import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { WebsocketService } from 'src/app/services/web-socket.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  order: Order[] = [];
  returnUrl = 'view-orders';
  constructor(private socket: WebsocketService, private orderService: OrderService, private activatedRoute: ActivatedRoute
    ,private router: Router){
    let orderObservable: Observable<Order[]>;
    activatedRoute.params.subscribe((params) => {
      orderObservable = orderService.getOrderDetails();
      console.log(orderObservable);
      orderObservable.subscribe((serverProduct) => {
        console.log(serverProduct)
        this.order = serverProduct;
      })

    })
    this.socket.listenToServer('orderAdded').subscribe((data: any) => {

      // this.product = this.orderService.getOrderDetails()

      console.log('order added',data);
      // this.product = this.orderService.getOrderDetails()
      let orderObservable: Observable<Order[]>;
    activatedRoute.params.subscribe((params) => {
      orderObservable = orderService.getOrderDetails();
      console.log(orderObservable);
      orderObservable.subscribe((serverProduct) => {
        console.log(serverProduct)
        this.order = serverProduct;
      })

    })


    })

  }


  // removeProduct(){
  //   this.activatedRoute.params.subscribe((params) => {
  //     this.orderService.removeOrdertById(params.id).subscribe((_) => {
  //       this.router.navigateByUrl(this.returnUrl);
  //     });
  //   });
  // }




  ngOnInit(): void {
  //   this.socket.listenToServer('orderAdded').subscribe((data: any) => {
  //     console.log('order added',data);
  //     // this.product = this.orderService.getOrderDetails()


  //   })
  }
}


