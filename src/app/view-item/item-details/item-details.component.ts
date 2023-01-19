import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/shared/models/Item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  Stage!: Item;
  constructor(activatedRoute:ActivatedRoute, itemServices:ItemService, private cartService:CartService, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.Stage = itemServices.getStagesById(params['id'])
    })

  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.Stage);
    this.router.navigateByUrl('/cart')
  }

}
