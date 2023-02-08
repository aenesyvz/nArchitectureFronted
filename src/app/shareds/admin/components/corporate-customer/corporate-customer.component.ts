import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatedCorporateCustomerDto, GetByIdCorporateCustomerDto, GetListCorporateCustomerDto, UpdatedCorporateCustomerDto } from 'src/app/domain/dtos/corporateCustomerDto';
import { CorporateCustomerService } from 'src/app/services/corporate-customer.service';

@Component({
  selector: 'app-corporate-customer',
  templateUrl: './corporate-customer.component.html',
  styleUrls: ['./corporate-customer.component.css']
})
export class CorporateCustomerComponent implements OnInit {

  corporateCustomers:GetListCorporateCustomerDto[] = [];
  corporateCustomer:GetByIdCorporateCustomerDto;

  addForm:FormGroup;
  updateForm:FormGroup;

  id:number;
  customerId:number;
  companyName:string;
  taxNo:string;

  constructor(
    private corporateCustomerService:CorporateCustomerService
  ) { }

  ngOnInit(): void {
  }

  createAddForm(){
    this.addForm = new FormGroup({
      customerId:new FormControl(0,Validators.required),
      companyName:new FormControl(0,Validators.required),
      taxNo:new FormControl("",Validators.required)
    })
  }

  add(){
    if(this.addForm.valid){
      let corporateCustomerModel:CreatedCorporateCustomerDto = Object.assign({},this.addForm.value);
      this.corporateCustomerService.add(corporateCustomerModel).subscribe({});
    }
  }

  createUpdateForm(){
    this.updateForm = new FormGroup({
      id:new FormControl(0,Validators.required),
      customerId:new FormControl(0,Validators.required),
      companyName:new FormControl(0,Validators.required),
      taxNo:new FormControl("",Validators.required)
    });
  }

  update(){
    if(this.updateForm.valid){
      let corporateCustomerModel:UpdatedCorporateCustomerDto = Object.assign({},this.addForm.value);
      this.corporateCustomerService.update(corporateCustomerModel).subscribe({});
    }
  }

  getByIdForUpdateForm(id:number){
    this.corporateCustomerService.getById(id).subscribe((res)=>{
      this.updateForm.controls["id"].setValue(res.id);
      this.updateForm.controls["customerId"].setValue(res.customerId);
      this.updateForm.controls["componayName"].setValue(res.companyName);
      this.updateForm.controls["taxNo"].setValue(res.taxNo);
    });
  }

  getById(id:number){
    this.corporateCustomerService.getById(id).subscribe((res)=> {
      this.corporateCustomer = res;
    });
  }

  getAll(){
    this.corporateCustomerService.getList().subscribe((res)=> {
      this.corporateCustomers = res.items;
    });
  }
}
