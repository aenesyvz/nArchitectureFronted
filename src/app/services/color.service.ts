import { HttpClient } from '@angular/common/http';
import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatedColorDto, DeletedColorDto, GetByIdColorDto, GetListColorDto, UpdatedColorDto } from '../domain/dtos/colorDtos';
import { Color } from '../domain/entities/color';
import { ListResponseModel } from '../domain/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  newApiUrl:string=this.apiUrl+"/Colors";

  getById(id:number):Observable<GetByIdColorDto>{
    let newPath=this.newApiUrl + "/GetById"+id;
    return this.httpClient.get<GetByIdColorDto>(newPath);
  }

  getList():Observable<ListResponseModel<GetListColorDto>>{
    let newPath = this.newApiUrl+"/GetList";
    return this.httpClient.get<ListResponseModel<GetListColorDto>>(newPath);
  }

  add(color:CreatedColorDto){
    let newPath = this.newApiUrl + "/Add";
    return this.httpClient.post(newPath,color);
  }

  
  update(color:UpdatedColorDto){
    let newPath = this.newApiUrl + "/Update";
    return this.httpClient.post(newPath,color);
  }
  
  
  delete(color:DeletedColorDto){
    let newPath = this.newApiUrl + "/Delete";
    return this.httpClient.post(newPath,color);
  }
  
}
