import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'wedding-backend/src/models/wedding.model';

@Component({
  selector: 'app-red-carpet',
  templateUrl: './red-carpet.component.html',
  styleUrls: ['./red-carpet.component.css']
})
export class RedCarpetComponent implements OnInit {

  redCarpets:Item[]=[];

  constructor(private itemService: ItemService) {
    let productObservable: Observable<Item[]>;
    productObservable = this.itemService.getAllRedcarpet();

    productObservable.subscribe((serverRedcarpet => {
      this.redCarpets = serverRedcarpet;
    }))
   }

  ngOnInit(): void {
  }

}
