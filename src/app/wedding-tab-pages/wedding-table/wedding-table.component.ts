import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'wedding-backend/src/models/wedding.model';

@Component({
  selector: 'app-wedding-table',
  templateUrl: './wedding-table.component.html',
  styleUrls: ['./wedding-table.component.css']
})
export class WeddingTableComponent implements OnInit {

  tables:Item[]=[];

  constructor(private itemService: ItemService) {
    let productObservable: Observable<Item[]>;
    productObservable = this.itemService.getAllTable();

    productObservable.subscribe((serverTable => {
      this.tables = serverTable;
    }))
   }

  ngOnInit(): void {
  }

}
