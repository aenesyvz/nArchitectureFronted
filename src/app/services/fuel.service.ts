import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatedFuelDto, DeletedFuelDto, GetFuelDto, GetListFuelDto, UpdatedFuelDto } from '../domain/dtos/fuelDto';
import { Fuel } from '../domain/entities/fuel';
import { ListResponseModel } from '../domain/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FuelService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  newApiUrl:string = this.apiUrl + "/Fuels";

  getById(id:number):Observable<GetFuelDto>{
    let newPath=this.newApiUrl + "/GetById/"+id;
    return this.httpClient.get<GetFuelDto>(newPath);
  }

  getList():Observable<ListResponseModel<GetListFuelDto>>{
    let newPath = this.newApiUrl + "/GetList";
    return this.httpClient.get<ListResponseModel<GetListFuelDto>>(newPath);
  }

  add(fuel:CreatedFuelDto){
    let newPath = this.newApiUrl + "/Add";
    return this.httpClient.post(newPath,fuel);
  }
  udpate(fuel:UpdatedFuelDto){
    let newPath = this.newApiUrl + "/Update";
    return this.httpClient.post(newPath,fuel);
  }
  delete(fuel:DeletedFuelDto){
    let newPath = this.newApiUrl + "/Delete";
    return this.httpClient.post(newPath,fuel);
  }
}
