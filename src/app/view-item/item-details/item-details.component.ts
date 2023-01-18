import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/shared/models/Item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  Stage!: Item;
  constructor(activatedRoute:ActivatedRoute, itemServices:ItemService) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.Stage = itemServices.getStagesById(params['id'])
    })

  }

  ngOnInit(): void {
  }

}
