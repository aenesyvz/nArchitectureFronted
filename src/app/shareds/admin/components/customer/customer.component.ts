import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatedCustomerDto, GetCustomerDto, GetListCustomerDto, UpdatedCustomerDto } from 'src/app/domain/dtos/customerDto';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers:GetListCustomerDto[] = [];
  customer:GetCustomerDto;

  addForm:FormGroup;
  updateForm:FormGroup;

  id:number;
  userId:number;

  constructor(
    private customerService:CustomerService
  ) { }

  ngOnInit(): void {
  }

  createAddForm(){
    this.addForm = new FormGroup({
      userId:new FormControl(0,Validators.required),
    })
  }

  add(){
    if(this.addForm.valid){
      let customerModel:CreatedCustomerDto = Object.assign({},this.addForm.value);

      this.customerService.add(customerModel).subscribe({});
    }
  }

  createUpdateForm(){
    if(this.updateForm.valid){
      let customerModel:UpdatedCustomerDto = Object.assign({},this.updateForm.value);

      this.customerService.update(customerModel).subscribe({});
    }
  }

  getByIdForUpdateForm(id:number){
    this.customerService.getById(id).subscribe((res) => {
      this.updateForm.controls["id"].setValue(res.id);
      this.updateForm.controls["userId"].setValue(res.userId);
    });
  }

  getById(id:number){
    this.customerService.getById(id).subscribe((res) => {
      this.customer = res;
    });
  }

  getAll(){
    this.customerService.getList().subscribe((res) => {
      this.customers = res.items;
    });
  }
}
