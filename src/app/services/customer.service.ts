import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatedCustomerDto, DeletedCustomerDto, GetCustomerDto, GetListCustomerDto, UpdatedCustomerDto } from '../domain/dtos/customerDto';
import { ListResponseModel } from '../domain/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  newApiUrl:string = this.apiUrl + "/Customers";

  getById(id:number):Observable<GetCustomerDto>{
    let newPath =this.newApiUrl + "/GetById/"+id;
    return this.httpClient.get<GetCustomerDto>(newPath);
  }

  getList():Observable<ListResponseModel<GetListCustomerDto>>{
    let newPath = this.newApiUrl + "/GetList";
    return this.httpClient.get<ListResponseModel<GetListCustomerDto>>(newPath);
  }

  add(customer:CreatedCustomerDto){
    let newPath = this.newApiUrl + "/Add";
    return this.httpClient.post(newPath,customer);
  }


  update(customer:UpdatedCustomerDto){
    let newPath = this.newApiUrl + "/Update";
    return this.httpClient.post(newPath,customer);
  }

  delete(customer:DeletedCustomerDto){
    let newPath = this.newApiUrl + "/Delete";
    return this.httpClient.post(newPath,customer);
  }
}
