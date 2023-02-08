import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatedOperationClaimDto, GetOperationClaimDto, UpdatedOperationClaimDto } from '../domain/dtos/operationClaimDto';
import { OperationClaim } from '../domain/entities/operationClaim';
import { ListResponseModel } from '../domain/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class OperationClaimService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  newApiUrl:string=this.apiUrl + "/OperationClaims";

  getById(id:number):Observable<GetOperationClaimDto>{
    let newPath = this.newApiUrl + "/GetById/"+id;
    return this.httpClient.get<GetOperationClaimDto>(newPath);
  }

  getList():Observable<ListResponseModel<OperationClaim>>{
    let newPath = this.newApiUrl + "/GetList";
    return this.httpClient.get<ListResponseModel<GetOperationClaimDto>>(newPath);
  }

  add(operationClaim:CreatedOperationClaimDto){
    let newPath = this.newApiUrl + "/Add";
    return this.httpClient.post(newPath,operationClaim);
  }
  update(operationClaim:UpdatedOperationClaimDto){
    let newPath = this.newApiUrl + "/Update";
    return this.httpClient.post(newPath,operationClaim);
  }
  delete(id:number){
    let newPath = this.newApiUrl + "/Delete/"+id;
    return this.httpClient.get(newPath);
  }
}
