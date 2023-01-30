import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'wedding-backend/src/models/wedding.model';

@Component({
  selector: 'app-balloon',
  templateUrl: './balloon.component.html',
  styleUrls: ['./balloon.component.css']
})
export class BalloonComponent implements OnInit {

  balloons:Item[]=[];

  constructor(private itemService: ItemService) {
    let productObservable: Observable<Item[]>;
    productObservable = this.itemService.getAllBalloon();

    productObservable.subscribe((serverBalloon => {
      this.balloons = serverBalloon;
    }))
   }


  ngOnInit(): void {
  }

}
