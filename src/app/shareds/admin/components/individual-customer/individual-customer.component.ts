import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatedIndividualCustomerDto, GetIndividualCustomerDto, GetListIndividualCustomerDto, UpdatedIndividualCustomerDto } from 'src/app/domain/dtos/individualCustomerDto';
import { IndividualCustomerService } from 'src/app/services/individual-customer.service';

@Component({
  selector: 'app-individual-customer',
  templateUrl: './individual-customer.component.html',
  styleUrls: ['./individual-customer.component.css']
})
export class IndividualCustomerComponent implements OnInit {
  individualCustomers:GetListIndividualCustomerDto[] = [];
  individualCustomer:GetIndividualCustomerDto;

  addForm:FormGroup;
  updateForm:FormGroup;

  id:number;
  customerId:number;
  firstName:string;
  lastName:string;
  nationalIdentity:string;

  constructor(
    private individualCustomerService:IndividualCustomerService
  ) { }

  ngOnInit(): void {
  }

  createAddForm(){
    this.addForm = new FormGroup({
      customerId:new FormControl(0,Validators.required),
      firstName:new FormControl("",Validators.required),
      lastName:new FormControl("",Validators.required),
      nationalIdentity:new FormControl("",Validators.required)
    });
  }

  add(){
    if(this.addForm.valid){
      let individualCustomerModel:CreatedIndividualCustomerDto = Object.assign({},this.addForm.value);

      this.individualCustomerService.add(individualCustomerModel).subscribe({});
    }
  }

  createUpdateForm(){
    this.updateForm = new FormGroup({
      id:new FormControl(0,Validators.required),
      customerId:new FormControl(0,Validators.required),
      firstName:new FormControl("",Validators.required),
      lastName:new FormControl("",Validators.required),
      nationalIdentity:new FormControl("",Validators.required)
    });
  }

  update(){
    if(this.updateForm.valid){
      let individualCustomerModel:UpdatedIndividualCustomerDto=Object.assign({},this.updateForm.value);

      this.individualCustomerService.update(individualCustomerModel).subscribe({});
    }
  }

  getByIdForUpdateForm(id:number){
    this.individualCustomerService.getById(id).subscribe((res) => {
      this.updateForm.controls["id"].setValue(res.id);
      this.updateForm.controls["customerId"].setValue(res.customerId);
      this.updateForm.controls["firstName"].setValue(res.firstName);
      this.updateForm.controls["lastName"].setValue(res.lastName);
      this.updateForm.controls["nationalIdentity"].setValue(res.nationalIdentity);
    });
  }

  getById(id:number){
    this.individualCustomerService.getById(id).subscribe((res)=> {
      this.individualCustomer = res;
    });
  }

  getAll(){
    this.individualCustomerService.getList().subscribe((res)=> {
      this.individualCustomers = res.items;
    })
  }
}
