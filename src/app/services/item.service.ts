import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { example_weddingStage } from 'src/data';
import { ADD_ITEM_URL, BALLOON_URL, BALLOON_URL_BY_ID, CAR_URL, CAR_URL_BY_ID, DANCE_URL, DANCE_URL_BY_ID, ITEM_BY_ID_URL, ITEM_UPDATE_URL, ITEM_URL, PARTYDJ_URL, PARTYDJ_URL_BY_ID, PRODUCT_URL, PRODUCT_URL_BY_ID, REDCARPET_URL, REDCARPET_URL_BY_ID, STAGEDEC_URL, STAGEDEC_URL_BY_ID, TABLE_URL, TABLE_URL_BY_ID } from '../shared/constants/urls';
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

  getAllDance(): Observable<Item[]>{
    return this.http.get<Item[]>(DANCE_URL);
  }


  getDanceById(danceId:string): Observable<Item> {
    return this.http.get<Item>(DANCE_URL_BY_ID + danceId);
  }

  getAllCar(): Observable<Item[]>{
    return this.http.get<Item[]>(CAR_URL);
  }


  getCarById(carId:string): Observable<Item> {
    return this.http.get<Item>(CAR_URL_BY_ID + carId);
  }

  getAllTable(): Observable<Item[]>{
    return this.http.get<Item[]>(TABLE_URL);
  }


  getTableById(tableId:string): Observable<Item> {
    return this.http.get<Item>(TABLE_URL_BY_ID + tableId);
  }

  getAllPartyDj(): Observable<Item[]>{
    return this.http.get<Item[]>(PARTYDJ_URL);
  }


  getPartyDjById(partyDjId:string): Observable<Item> {
    return this.http.get<Item>(PARTYDJ_URL_BY_ID + partyDjId);
  }

  getAllBalloon(): Observable<Item[]>{
    return this.http.get<Item[]>(BALLOON_URL);
  }


  getBalloonById(balloonId:string): Observable<Item> {
    return this.http.get<Item>(BALLOON_URL_BY_ID + balloonId);
  }

  getAllSatgeDec(): Observable<Item[]>{
    return this.http.get<Item[]>(STAGEDEC_URL);
  }


  getStageDecById(stagedecId:string): Observable<Item> {
    return this.http.get<Item>(STAGEDEC_URL_BY_ID + stagedecId);
  }

  getAllRedcarpet(): Observable<Item[]>{
    return this.http.get<Item[]>(REDCARPET_URL);
  }


  getRedcarpetById(redCarpetId:string): Observable<Item> {
    return this.http.get<Item>(REDCARPET_URL_BY_ID + redCarpetId);
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
