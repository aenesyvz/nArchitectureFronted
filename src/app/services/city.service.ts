import { HttpClient } from '@angular/common/http';
import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCityDto, GetListCityDto } from '../domain/dtos/cityDtos';
import { City } from '../domain/entities/city';
import { ListResponseModel } from '../domain/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    @Inject("apiUrl") private apiUrl : string,
    private httpClient:HttpClient
  ) { }

  newApiUrl :string = this.apiUrl+"/Cities";

  getById(id:number):Observable<GetCityDto>{
    let newPath=this.newApiUrl+"/GetById"+id;
    return this.httpClient.get<GetCityDto>(newPath);
  }

  getList():Observable<ListResponseModel<GetListCityDto>>{
    let newPath = this.newApiUrl + "/GetList";
    return this.httpClient.get<ListResponseModel<GetListCityDto>>(newPath);
  }

  add(city:City){
    let newPath = this.newApiUrl + "/Add";
    return this.httpClient.post(newPath,city);
  }
  update(city:City){
    let newPath = this.newApiUrl + "/Update";
    return this.httpClient.post(newPath,city);
  }

  delete(id:number){
    let newPath = this.newApiUrl + "/Delete"+id;
    return this.httpClient.get(newPath);
  }
}
