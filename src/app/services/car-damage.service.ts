import { HttpClient } from '@angular/common/http';
import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDamageDto, CreatedCarDamageDto, DeletedCarDamageDto, GetListCarDamageDto, UpdatedCarDamageDto } from '../domain/dtos/carDamageDtos';
import { CarDamage } from '../domain/entities/carDamage';
import { ListResponseModel } from '../domain/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDamageService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  getById(id:number):Observable<CarDamageDto>{
    let newPath = this.apiUrl + "/CarDamages/GetById/"+id;
    return this.httpClient.get<CarDamageDto>(newPath);
  }

  getList():Observable<ListResponseModel<GetListCarDamageDto>>{
    let newPath = this.apiUrl + "/CarDamages/GetList";
    return this.httpClient.get<ListResponseModel<GetListCarDamageDto>>(newPath);
  }

  getByCarId(carId:number):Observable<CarDamageDto>{
    let newPath = this.apiUrl + "/CarDamages/ByCarId/"+carId;
    return this.httpClient.get<CarDamageDto>(newPath);
  }

  add(carDamage:CreatedCarDamageDto){
    let newPath = this.apiUrl + "/CarDamages/Add";
    return this.httpClient.post<CarDamage>(newPath,carDamage);
  }

  delete(carDamage:DeletedCarDamageDto){
    let newPath = this.apiUrl + "/CarDamages/Delete";
    return this.httpClient.post(newPath,carDamage);
  }

  update(carDamage:UpdatedCarDamageDto){
    let newPath = this.apiUrl + "/CarDamages/Update";
    return this.httpClient.post(newPath,carDamage);
  }
}
