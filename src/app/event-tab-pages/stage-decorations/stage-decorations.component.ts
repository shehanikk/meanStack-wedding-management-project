import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'wedding-backend/src/models/wedding.model';

@Component({
  selector: 'app-stage-decorations',
  templateUrl: './stage-decorations.component.html',
  styleUrls: ['./stage-decorations.component.css']
})
export class StageDecorationsComponent implements OnInit {

  stageDecs:Item[]=[];

  constructor(private itemService: ItemService) {
    let productObservable: Observable<Item[]>;
    productObservable = this.itemService.getAllSatgeDec();

    productObservable.subscribe((serverStageDec => {
      this.stageDecs = serverStageDec;
    }))
   }


  ngOnInit(): void {
  }

}
