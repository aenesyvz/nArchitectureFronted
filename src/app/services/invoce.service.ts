import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatedInvoiceDto, GetInvoiceDto, UpdatedInvoiceDto } from '../domain/dtos/invoiceDto';
import { Invoice } from '../domain/entities/invoce';

@Injectable({
  providedIn: 'root'
})
export class InvoceService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  newApiUrl:string = this.apiUrl + "/Invoices";

  getById(id:number):Observable<GetInvoiceDto>{
    let newPath = this.newApiUrl+"/GetById/"+id;
    return this.httpClient.get<GetInvoiceDto>(newPath);
  }
  getByDates(){
    let newPath = this.newApiUrl + "/ByDates";
    return this.httpClient.get(newPath);
  }
  getByCustomerId(customerId:number){
    let newPath = this.newApiUrl +"/ByCustomerId/"+customerId;
    return this.httpClient.get(newPath);
  }

  add(invoce:CreatedInvoiceDto){
    let newPath = this.newApiUrl + "/Add";
    return this.httpClient.get(newPath);
  }
  update(invoce:UpdatedInvoiceDto){
    let newPath = this.newApiUrl + "/Update";
    return this.httpClient.get(newPath);
  } 
  delete(id:number){
    let newPath = this.newApiUrl + "/Delete";
    return this.httpClient.get(newPath);
  }
}
