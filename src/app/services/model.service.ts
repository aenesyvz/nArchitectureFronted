import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListModelDto, GetModelDto } from '../domain/dtos/modelDto';
import { Model } from '../domain/entities/model';
import { ListResponseModel } from '../domain/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  newApiUrl:string = this.apiUrl + "/Models";

  getById(id:number):Observable<GetModelDto>{
    let newPath = this.newApiUrl + "/GetById/"+id;
    return this.httpClient.get<GetModelDto>(newPath);
  }

  getList():Observable<ListResponseModel<GetListModelDto>>{
    let newPath = this.newApiUrl + "/GetList";
    return this.httpClient.get<ListResponseModel<GetListModelDto>>(newPath);
  }

  getListByDynamic():Observable<ListResponseModel<GetListModelDto>>{
    let newPath = this.newApiUrl + "/GetListByDynamic";
    return this.httpClient.post<ListResponseModel<GetListModelDto>>(newPath,{});
  }

  add(model:Model){
    let newPath = this.newApiUrl + "/Add";
    return this.httpClient.post(newPath,model);
  }
  update(model:Model){
    let newPath = this.newApiUrl + "/Update";
    return this.httpClient.post(newPath,model);
  }
  delete(model:Model){
    let newPath = this.newApiUrl + "/Delete";
    return this.httpClient.post(newPath,model);
  }
}
