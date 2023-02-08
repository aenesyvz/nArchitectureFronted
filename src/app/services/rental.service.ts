import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Rental } from '../domain/entities/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  newApiUrl:string = this.apiUrl + "/Rentals";

  getById(id:number){
    let newPath = this.newApiUrl + "/GetById/"+id;
    return this.httpClient.get(newPath);
  }

  getList(){
    let newPath = this.newApiUrl + "/GetList";
    return this.httpClient.get(newPath);
  }

  add(rental:Rental){
    let newPath = this.newApiUrl + "/Add";
    return this.httpClient.post(newPath,rental);
  }
  update(rental:Rental){
    let newPath = this.newApiUrl + "/Update";
    return this.httpClient.post(newPath,rental);
  }
  delete(rental:Rental){
    let newPath = this.newApiUrl + "/Delete";
    return this.httpClient.post(newPath,rental);
  }

  pickUp(){
    let newPath = this.newApiUrl + "/PickUp";
    return this.httpClient.post(newPath,{});
  }
}
