import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatedCorporateCustomerDto, DeletedCorporateCustomerDto, GetByIdCorporateCustomerDto, GetListCorporateCustomerDto, UpdatedCorporateCustomerDto } from '../domain/dtos/corporateCustomerDto';
import { CorporateCustomer } from '../domain/entities/corporateCustomer';
import { BasePageableModel } from '../domain/models/basePageableModel';
import { ListResponseModel } from '../domain/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CorporateCustomerService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  newApiUrl = this.apiUrl + "/CoporateCustomers";

  getById(id:number):Observable<GetByIdCorporateCustomerDto>{
    let newPath = this.newApiUrl + "/GetById/"+id;
    return this.httpClient.get<GetByIdCorporateCustomerDto>(newPath);
  }

  getByCustomerId(customerId:number):Observable<GetByIdCorporateCustomerDto>{
    let newPath = this.newApiUrl + "/GetByCustomerId/"+customerId;
    return this.httpClient.get<GetByIdCorporateCustomerDto>(newPath);
  }

  getList():Observable<ListResponseModel<GetListCorporateCustomerDto>>{
    let newPath = this.newApiUrl + "/GetList";
    return this.httpClient.get<ListResponseModel<GetListCorporateCustomerDto>>(newPath);
  }

  add(corporateCustomer:CreatedCorporateCustomerDto){
    let newPath = this.newApiUrl + "/Add";
    return this.httpClient.post(newPath,corporateCustomer);
  }
  update(corporateCustomer:UpdatedCorporateCustomerDto){
    let newPath = this.newApiUrl + "/Update";
    return this.httpClient.post(newPath,corporateCustomer);
  } 
  delete(corporateCustomer:DeletedCorporateCustomerDto){
    let newPath = this.newApiUrl + "/Delete";
    return this.httpClient.post(newPath,corporateCustomer);
  }
}
