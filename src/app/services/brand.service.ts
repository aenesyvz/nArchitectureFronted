import { HttpClient } from '@angular/common/http';
import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatedBrandDto, DeletedBrandDto, GetByIdBrandDto, GetListBrandDto, UpdatedBrandDto } from '../domain/dtos/brandDtos';
import { Brand } from '../domain/entities/brand';
import { ListResponseModel } from '../domain/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  getById(id:number):Observable<GetByIdBrandDto>{
    let newPath = this.apiUrl + "/Brands/GetById/"+id;
    return this.httpClient.get<GetByIdBrandDto>(newPath);
  }

  getAll():Observable<ListResponseModel<GetListBrandDto>>{
    let newPath = this.apiUrl + "/Brands/GetList";
    return this.httpClient.get<ListResponseModel<GetListBrandDto>>(newPath);
  }

  add(brand:CreatedBrandDto){
    let newPath = this.apiUrl + "/Brand/Add";
    return this.httpClient.post(newPath,brand);
  }
  
  update(brand:UpdatedBrandDto){
    let newPath = this.apiUrl + "/Brand/Update";
    return this.httpClient.post(newPath,brand);
  }
  
  delete(brand:DeletedBrandDto){
    let newPath = this.apiUrl + "/Brand/Delete";
    return this.httpClient.post(newPath,brand);
  }
}
