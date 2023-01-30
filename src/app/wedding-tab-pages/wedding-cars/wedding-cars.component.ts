import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'wedding-backend/src/models/wedding.model';

@Component({
  selector: 'app-wedding-cars',
  templateUrl: './wedding-cars.component.html',
  styleUrls: ['./wedding-cars.component.css']
})
export class WeddingCarsComponent implements OnInit {

  cars:Item[]=[];

  constructor(private itemService: ItemService) {
    let productObservable: Observable<Item[]>;
    productObservable = this.itemService.getAllCar();

    productObservable.subscribe((serverCar => {
      this.cars = serverCar;
    }))
   }

  ngOnInit(): void {
  }

}
