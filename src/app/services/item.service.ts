import { Injectable } from '@angular/core';
import { example_weddingStage } from 'src/data';
import { Item } from '../shared/models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getAll():Item[]{
    return example_weddingStage;
  }

  getStagesById(stageId:string): Item {
    return this.getAll().find(stage => stage.id == stageId) ?? new Item();
  }

}
