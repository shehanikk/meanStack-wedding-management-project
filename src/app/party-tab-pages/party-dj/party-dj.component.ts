import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'wedding-backend/src/models/wedding.model';

@Component({
  selector: 'app-party-dj',
  templateUrl: './party-dj.component.html',
  styleUrls: ['./party-dj.component.css']
})
export class PartyDjComponent implements OnInit {

  partyDjs:Item[]=[];

  constructor(private itemService: ItemService) {
    let productObservable: Observable<Item[]>;
    productObservable = this.itemService.getAllPartyDj();

    productObservable.subscribe((serverPartyDj => {
      this.partyDjs = serverPartyDj;
    }))
   }


  ngOnInit(): void {
  }

}
