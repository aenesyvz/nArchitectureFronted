import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListTransmissionDto, TransmissionDto } from '../domain/dtos/transmissionDto';
import { Transmission } from '../domain/entities/transmission';
import { ListResponseModel } from '../domain/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class TransmissionService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }


  newApiUrl :string = this.apiUrl + "/Transmissions";
  
  getById(id:number):Observable<TransmissionDto>{
    let newPath = this.newApiUrl + "/GetById/"+id;
    return this.httpClient.get<TransmissionDto>(newPath);
  }

  getList():Observable<ListResponseModel<GetListTransmissionDto>>{
    let newPath = this.newApiUrl + "/GetList";
    return this.httpClient.get<ListResponseModel<GetListTransmissionDto>>(newPath);
  }

  add(transmission:Transmission){
    let newPath = this.newApiUrl + "/Add";
    return this.httpClient.post(newPath,transmission);
  }

  update(transmission:Transmission){
    let newPath = this.newApiUrl + "/Update";
    return this.httpClient.post(newPath,transmission);
  }

  delete(transmission:Transmission){
    let newPath = this.newApiUrl + "/Delete";
    return this.httpClient.post(newPath,transmission);
  }

}
