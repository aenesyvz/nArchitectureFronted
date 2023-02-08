import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatedFindeksCreditRateDto, DeletedFindeksCreditRateDto, GetFindeksCreditRateDto, GetListFindeksCreditRateDto, UpdatedFindeksCreditRateDto } from '../domain/dtos/findeksCreditRatesDto';
import { ListResponseModel } from '../domain/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FindeksCreditScoreService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  newApiUrl:string = this.apiUrl +"/FindeksCreditScore";

  getById(id:number):Observable<GetFindeksCreditRateDto>{
    let newPath = this.newApiUrl + "/GetById/"+id;
    return this.httpClient.get<GetFindeksCreditRateDto>(newPath);
  }

  getAll():Observable<ListResponseModel<GetListFindeksCreditRateDto>>{
    let newPath = this.newApiUrl + "/GetList";
    return this.httpClient.get<ListResponseModel<GetListFindeksCreditRateDto>>(newPath);
  }

  add(findeksCreditScore:CreatedFindeksCreditRateDto){
    let newPath = this.newApiUrl + "/Add";
    return this.httpClient.post(newPath,findeksCreditScore);
  }
  update(findeksCreditScore:UpdatedFindeksCreditRateDto){
    let newPath = this.newApiUrl + "/Update";
    return this.httpClient.post(newPath,findeksCreditScore);
  }
  delete(findeksCreditScore:DeletedFindeksCreditRateDto){
    let newPath = this.newApiUrl + "/Delete";
    return this.httpClient.post(newPath,findeksCreditScore);
  }
}
