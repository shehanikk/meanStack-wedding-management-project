import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/shared/models/Item';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent implements OnInit {

  stages:Item[]=[];

  constructor(private itemService: ItemService) {
    this.stages = this.itemService.getAll();
   }

  ngOnInit(): void {
  }

}
