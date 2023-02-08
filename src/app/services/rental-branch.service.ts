import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { RentalBranch } from '../domain/entities/rentalBranch';

@Injectable({
  providedIn: 'root'
})
export class RentalBranchService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  newApiUrl :string = this.apiUrl + "/RentalBranchs";
  
  getById(id:number){
    let newPath = this.newApiUrl + "/GetById/"+id;
    return this.httpClient.get(newPath);
  }

  getList(){
    let newPath = this.newApiUrl + "/GetList";
    return this.httpClient.get(newPath);
  }

  add(rentalBranch:RentalBranch){
    let newPath = this.newApiUrl + "/Add";
    return this.httpClient.post(newPath,rentalBranch);
  }

  update(rentalBranch:RentalBranch){
    let newPath = this.newApiUrl + "/Update";
    return this.httpClient.post(newPath,rentalBranch);
  }
  delete(rentalBranch:RentalBranch){
    let newPath = this.newApiUrl + "/Delete";
    return this.httpClient.post(newPath,rentalBranch);
  }
}
