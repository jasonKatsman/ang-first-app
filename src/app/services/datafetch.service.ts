import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Beer} from "../types/beer";

const URL ='https://api.punkapi.com/v2/beers'
@Injectable({
  providedIn: 'root'
})
export class DatafetchService {

  constructor( private client:HttpClient) { }

  getBeersPagination(skip:number,limit:number) {
    return  this.client.get<Beer[]>(`${URL}/?page=${skip}&per_page=${limit}`)
  }

  getBeerInfo(id:string) {
    return  this.client.get<Beer[]>(`${URL}/${id}`)
  }
}
