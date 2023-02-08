import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListUserOperationClaimDto, GetUserOperationClaimDto } from '../domain/dtos/userOperationClaimDto';
import { UserOperationClaim } from '../domain/entities/userOperationClaim';
import { ListResponseModel } from '../domain/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserOperationClaimService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  newApiUrl:string = this.apiUrl + "/UserOperationClaims";

  getById(id:number):Observable<GetUserOperationClaimDto>{
    let newPath = this.newApiUrl + "/GetById/"+id;
    return this.httpClient.get<GetUserOperationClaimDto>(newPath);
  }

  getList():Observable<ListResponseModel<GetListUserOperationClaimDto>>{
    let newPath = this.newApiUrl + "/GetList";
    return this.httpClient.get<ListResponseModel<GetListUserOperationClaimDto>>(newPath);
  }

  add(userOperationClaim:UserOperationClaim){
    let newPath = this.newApiUrl + "/Add";
    return this.httpClient.post(newPath,userOperationClaim);
  }

  update(userOperationClaim:UserOperationClaim){
    let newPath = this.newApiUrl + "/Update";
    return  this.httpClient.post(newPath,userOperationClaim);
  }

  delete(userOperationClaim:UserOperationClaim){
    let newPath = this.newApiUrl + "/Delete";
    return this.httpClient.post(newPath,userOperationClaim);
  }
}
