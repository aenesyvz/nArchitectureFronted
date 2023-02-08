import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatedInvoiceDto, GetInvoiceDto, GetListInvoiceDto, UpdatedInvoiceDto } from 'src/app/domain/dtos/invoiceDto';
import { InvoceService } from 'src/app/services/invoce.service';

@Component({
  selector: 'app-invioce',
  templateUrl: './invioce.component.html',
  styleUrls: ['./invioce.component.css']
})
export class InvioceComponent implements OnInit {

  invoices:GetListInvoiceDto[] = [];
  invoice:GetInvoiceDto;

  id:number;
  customerId:number;
  no:string;
  createdDate:Date;
  rentalStartDate:Date;
  rentalEndDate:Date;
  totalRentalDate:number;
  rentalPrice:number;

  addForm:FormGroup;
  updateForm:FormGroup;

  constructor(
    private invoiceService:InvoceService
  ) { }

  ngOnInit(): void {
  }

  createAddForm(){
    this.addForm = new FormGroup({
      customerId: new FormControl(0,Validators.required),
      no:new FormControl(0,Validators.required),
      createdDate:new FormControl("",Validators.required),
      rentalStartDate:new FormControl("",Validators.required),
      rentalEndDate:new FormControl("",Validators.required),
      totalRentalDate:new FormControl("",Validators.required),
      rentalPrice:new FormControl(0,Validators.required)
    });
  }

  add(){
    if(this.addForm.valid){
      let inviceModel:CreatedInvoiceDto = Object.assign({},this.addForm.value);

      this.invoiceService.add(inviceModel).subscribe({});
    }
  }

  createUpdateForm(){
    this.updateForm = new FormGroup({
      id:new FormControl(0,Validators.required),
      customerId: new FormControl(0,Validators.required),
      no:new FormControl(0,Validators.required),
      createdDate:new FormControl("",Validators.required),
      rentalStartDate:new FormControl("",Validators.required),
      rentalEndDate:new FormControl("",Validators.required),
      totalRentalDate:new FormControl("",Validators.required),
      rentalPrice:new FormControl(0,Validators.required)
    });
  }

  update(){
    if(this.updateForm.valid){
      let inviceModel:UpdatedInvoiceDto = Object.assign({},this.updateForm.value);

      this.invoiceService.add(inviceModel).subscribe({});
    }
  }

  delete(id:number){
    this.invoiceService.delete(id).subscribe({});
  }

  getById(id:number){
    this.invoiceService.getById(id).subscribe((res)=>{
      this.invoice = res;
    })
  }

  getByIdForForm(id:number){
    this.invoiceService.getById(id).subscribe((res) => {
      this.updateForm.controls["id"].setValue(res.id);
      this.updateForm.controls["customerId"].setValue(res.customerId);
      this.updateForm.controls["no"].setValue(res.no);
      this.updateForm.controls["createdDate"].setValue(res.createdDate);
      this.updateForm.controls["rentalStartDate"].setValue(res.rentalStartDate);
      this.updateForm.controls["rentalEndDate"].setValue(res.rentalEndDate);
      this.updateForm.controls["totalRentalDate"].setValue(res.totalRentalDate);
      this.updateForm.controls["rentalPrice"].setValue(res.rentalPrice);
    })
  }
}
