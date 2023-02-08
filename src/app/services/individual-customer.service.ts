import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatedIndividualCustomerDto, DeletedIndividualCustomerDto, GetIndividualCustomerDto, GetListIndividualCustomerDto, UpdatedIndividualCustomerDto } from '../domain/dtos/individualCustomerDto';
import { IndividualCustomer } from '../domain/entities/individualCustomer';
import { ListResponseModel } from '../domain/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class IndividualCustomerService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient : HttpClient
  ) { }

  newApiUrl:string = this.apiUrl + "/IndividualCustomers";

  getById(id:number):Observable<GetIndividualCustomerDto>{
    let newPath = this.newApiUrl + "/GetById"+id;
    return this.httpClient.get<GetIndividualCustomerDto>(newPath);
  }
  
  getByCustomerId(customerId:number):Observable<GetIndividualCustomerDto>{
    let newPath = this.newApiUrl + "/GetByCustomerId"+customerId;
    return this.httpClient.get<GetIndividualCustomerDto>(newPath);
  }

  getList():Observable<ListResponseModel<GetListIndividualCustomerDto>>{
    let newPath = this.newApiUrl + "/GetList";
    return this.httpClient.get<ListResponseModel<GetListIndividualCustomerDto>>(newPath);
  }

  add(individualCustomer:CreatedIndividualCustomerDto){
    let newPath = this.newApiUrl + "/Add";
    return this.httpClient.post(newPath,individualCustomer);
  }
  update(individualCustomer:UpdatedIndividualCustomerDto){
    let newPath = this.newApiUrl + "/Update";
    return this.httpClient.post(newPath,individualCustomer);
  }
  delete(individualCustomer:DeletedIndividualCustomerDto){
    let newPath = this.newApiUrl + "/Delete";
    return this.httpClient.post(newPath,individualCustomer);
  }
}
