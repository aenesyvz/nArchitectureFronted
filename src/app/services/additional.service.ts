import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatedAdditinoalServiceDto, DeletedAdditionalServiceDto, GetByIdAdditionalServiceDto, GetListAdditionalServiceDto, UpdatedAdditionalServiceDto } from '../domain/dtos/additionalServiceDto';
import { BasePageableModel } from '../domain/models/basePageableModel';
import { ListResponseModel } from '../domain/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AdditionalService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  getById(id:number):Observable<GetByIdAdditionalServiceDto>{
    let newPath = this.apiUrl + "/AdditionalServices/GetById/"+id;
    return this.httpClient.get<GetByIdAdditionalServiceDto>(newPath);
  }

  getList():Observable<ListResponseModel<GetListAdditionalServiceDto>>{
    let newPath = this.apiUrl + "/AdditionalServices/GetAll";
    return this.httpClient.get<ListResponseModel<GetListAdditionalServiceDto>>(newPath);
  }

  add(additional:CreatedAdditinoalServiceDto):Observable<AdditionalService>{
    let newPath = this.apiUrl + "/AdditionalServices/Add";
    return  this.httpClient.post<AdditionalService>(newPath,additional);
  }

  update(additional:UpdatedAdditionalServiceDto):Observable<AdditionalService>{
    let newPath = this.apiUrl + "/AdditionalServices/Update";
    return  this.httpClient.post<AdditionalService>(newPath,additional);
  }

  delete(additional:DeletedAdditionalServiceDto):Observable<AdditionalService>{
    let newPath = this.apiUrl + "/AdditionalServices/Delete";
    return  this.httpClient.post<AdditionalService>(newPath,additional);
  }
}
