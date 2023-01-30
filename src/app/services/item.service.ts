import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { example_weddingStage } from 'src/data';
import { ADD_ITEM_URL, ITEM_BY_ID_URL, ITEM_UPDATE_URL, ITEM_URL, PRODUCT_URL, PRODUCT_URL_BY_ID } from '../shared/constants/urls';
import { IAddItem } from '../shared/interfaces/IAddItem';
import { Item } from '../shared/models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Item[]>{
    return this.http.get<Item[]>(PRODUCT_URL);
  }


  getAllProductsBySearchTerm(searchTerm: string){
    return this.http.get<Item[]>(PRODUCT_URL + searchTerm);
    }

  getStagesById(stageId:string): Observable<Item> {
    return this.http.get<Item>(PRODUCT_URL_BY_ID + stageId);
  }

  getItemByItemId(itemid:string): Observable<Item>{
    return this.http.get<Item>(ITEM_BY_ID_URL + itemid);
  }

  updateItemByItemId(item:IAddItem,itemid:string){
    return this.http.put<Item>(ITEM_UPDATE_URL +`/${itemid}`,item);
  }


  getAllItem(): Observable<Item[]>{
    return this.http.get<Item[]>( ITEM_URL);
  }


  removeProductById(itemid: string):Observable<Item>{
    return this.http.delete<Item>(ITEM_BY_ID_URL + itemid);
  }


  addItem(itemAdd: IAddItem) : Observable<Item> {
    return this.http.post<Item>(ADD_ITEM_URL, itemAdd);
  }

}
