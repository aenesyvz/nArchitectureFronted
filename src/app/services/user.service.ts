import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatedUserDto, DeletedUserDto, GetListUserDto, GetUpdatedUserFromAuthDto, GetUserDto, UpdatedUserDto, UpdatedUserFromAuthDto } from '../domain/dtos/userDtos';
import { User } from '../domain/entities/user';
import { ListResponseModel } from '../domain/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  newApiUrl:string = this.apiUrl + "/Users";

  getById(id:number):Observable<GetUserDto>{
    let newPath = this.newApiUrl + "/GetById/"+id;
    return this.httpClient.get<GetUserDto>(newPath);
  }

  getGetFromAuth():Observable<GetUpdatedUserFromAuthDto>{
    let newPath = this.newApiUrl + "/GetFromAuth";
    return this.httpClient.get<GetUpdatedUserFromAuthDto>(newPath);
  }

  getList():Observable<ListResponseModel<GetListUserDto>>{
    let newPath = this.newApiUrl + "/GetList";
    return this.httpClient.get<ListResponseModel<GetListUserDto>>(newPath);
  }

  add(user:CreatedUserDto){
    let newPath = this.newApiUrl + "/Add";
    return this.httpClient.post(newPath,user);
  }

  update(user:UpdatedUserDto){
    let newPath = this.newApiUrl + "/Update";
    return this.httpClient.post(newPath,user);
  }  

  updateFromAuth(user:UpdatedUserFromAuthDto){
    let newPath = this.newApiUrl + "/UpdateFromAuth";
    return this.httpClient.post(newPath,user);
  }

  delete(user:DeletedUserDto){
    let newPath = this.newApiUrl + "/Delete";
    return this.httpClient.post(newPath,user);
  }
}
