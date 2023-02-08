import { HttpClient } from '@angular/common/http';
import { Injectable ,Inject} from '@angular/core';
import { Observable } from 'rxjs';
import { CreatedCarDto, DeletedCarDto, DeliverRentalCarDto, GetByIDCarDto, GetCarDto, GetListCarDto, MaintainCarDto, UpdatedCarDto } from '../domain/dtos/carDtos';
import { Car } from '../domain/entities/car';
import { BasePageableModel } from '../domain/models/basePageableModel';
import { DynamicQuery } from '../domain/models/dynamicQuery';
import { ListResponseModel } from '../domain/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  newApiUrl :string = this.apiUrl + "/Car";

  getById(id:number):Observable<GetByIDCarDto>{
    let newPath = this.newApiUrl + "/GetById/"+id;
    return this.httpClient.get<GetByIDCarDto>(newPath);
  }

  getList():Observable<ListResponseModel<GetListCarDto>>{
    let newPath = this.newApiUrl + "/GetList";
    return this.httpClient.get<ListResponseModel<GetListCarDto>>(newPath);
  }

  getListByDynamic(pageRequest:BasePageableModel,dynamicQuery:DynamicQuery):Observable<ListResponseModel<GetListCarDto>>{
    let newPath = this.newApiUrl + "/GetList/ByDynamic";
    return this.httpClient.post<ListResponseModel<GetListCarDto>>(newPath,dynamicQuery);
  }

  add(car:CreatedCarDto){
    let newPath = this.newApiUrl + "/Add";
    return this.httpClient.post(newPath,car);
  }

  udpate(car:UpdatedCarDto){
    let newPath = this.newApiUrl + "/Delete";
    return this.httpClient.post(newPath,car);
  }

  delete(car:DeletedCarDto){
    let newPath = this.newApiUrl + "/Update";
    return this.httpClient.post(newPath,car);
  }

  maintain(car:MaintainCarDto){
    let newPath = this.newApiUrl + "/Maintain";
    return this.httpClient.post(newPath,car);
  }

  deliverRentalCar(car:DeliverRentalCarDto){
    let newPath = this.newApiUrl + "/DeliverRentalCar";
    return this.httpClient.post(newPath,car);
  }
}
