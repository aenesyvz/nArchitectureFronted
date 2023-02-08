import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatedOperationClaimDto, GetListOperationClaimDto, GetOperationClaimDto, UpdatedOperationClaimDto } from 'src/app/domain/dtos/operationClaimDto';
import { OperationClaim } from 'src/app/domain/entities/operationClaim';
import { OperationClaimService } from 'src/app/services/operation-claim.service';

@Component({
  selector: 'app-operation-claim',
  templateUrl: './operation-claim.component.html',
  styleUrls: ['./operation-claim.component.css']
})
export class OperationClaimComponent implements OnInit {

  operationClaims:GetListOperationClaimDto[] = [];
  operationClaim:GetOperationClaimDto;

  addForm:FormGroup;
  updateForm:FormGroup;
  
  id:number;
  name:string;

  constructor(
    private operationClaimService:OperationClaimService
  ) { }

  ngOnInit(): void {
  }

  createAddForm(){
    this.addForm = new FormGroup({
      name:new FormControl("",Validators.required)
    });
  }

  add(){
    if(this.addForm.valid){
      let operationClaimModel:CreatedOperationClaimDto = Object.assign({},this.addForm.value);

      this.operationClaimService.add(operationClaimModel).subscribe({});
    }
  }

  createUpdateForm(){
    this.updateForm = new FormGroup({
      id:new FormControl(0,Validators.required),
      name:new FormControl("",Validators.required)
    });
  }

  update(){
    if(this.updateForm.valid){
      let operationClaimModel:UpdatedOperationClaimDto = Object.assign({},this.updateForm.value);

      this.operationClaimService.update(operationClaimModel).subscribe({});
    }
  }

  getByIdForForm(id:number){
    this.operationClaimService.getById(id).subscribe((res)=> {
      this.updateForm.controls["id"].setValue(res.id);
      this.updateForm.controls["name"].setValue(res.id);
    })
  }

  getList(){
    this.operationClaimService.getList().subscribe((res)=> {
      this.operationClaims = res.items;
    });
  }

}
