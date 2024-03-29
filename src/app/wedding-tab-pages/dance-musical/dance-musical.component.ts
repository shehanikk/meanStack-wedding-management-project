import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'wedding-backend/src/models/wedding.model';

@Component({
  selector: 'app-dance-musical',
  templateUrl: './dance-musical.component.html',
  styleUrls: ['./dance-musical.component.css']
})
export class DanceMusicalComponent implements OnInit {

  dances:Item[]=[];

  constructor(private itemService: ItemService) {
    let productObservable: Observable<Item[]>;
    productObservable = this.itemService.getAllDance();

    productObservable.subscribe((serverDance => {
      this.dances = serverDance;
    }))
   }

  ngOnInit(): void {
  }

}
