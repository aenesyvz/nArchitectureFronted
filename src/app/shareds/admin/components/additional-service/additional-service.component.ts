import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatedAdditinoalServiceDto, GetByIdAdditionalServiceDto, GetListAdditionalServiceDto, UpdatedAdditionalServiceDto } from 'src/app/domain/dtos/additionalServiceDto';
import { AdditionalService } from 'src/app/services/additional.service';

@Component({
  selector: 'app-additional-service',
  templateUrl: './additional-service.component.html',
  styleUrls: ['./additional-service.component.css']
})
export class AdditionalServiceComponent implements OnInit {

  additionalServices:GetListAdditionalServiceDto[] = [];
  additionalServiceDto:GetByIdAdditionalServiceDto;

  addForm:FormGroup;
  updateForm:FormGroup;

  id:number;
  name:String;
  dailyPrice:number;

  constructor(
    private additionalService:AdditionalService
  ) { }

  ngOnInit(): void {
  }

  createAddForm(){
    this.addForm = new FormGroup({
      name:new FormControl("",Validators.required),
      dailyPrice:new FormControl(0,Validators.required)
    })
  }

  add(){
    if(this.addForm.valid){
      let additionalServiceModel:CreatedAdditinoalServiceDto = Object.assign({},this.addForm.value);

      this.additionalService.add(additionalServiceModel).subscribe({

      });
    }else{
      console.log("ADD HATA");
      
    }
  }

  createUpdateForm(){
    this.updateForm = new FormGroup({
      id:new FormControl(0,Validators.required),
      name:new FormControl("",Validators.required),
      dailyPrice:new FormControl(0,Validators.required)
    });
  }

  update(){
    if(this.updateForm.valid){
      let additionalServiceModel : UpdatedAdditionalServiceDto = Object.assign({},this.updateForm.value);

      this.additionalService.update(additionalServiceModel).subscribe({

      });
    }
  }

  getById(id:number){
    this.additionalService.getById(id).subscribe((res) =>{
      this.additionalServiceDto = res;
    });
  }

  getByIdForUpdateForm(id:number){
    this.additionalService.getById(id).subscribe((res) => {
      
      this.updateForm.controls["id"].setValue(res.id)
      this.updateForm.controls["name"].setValue(res.name)
      this.updateForm.controls["dailyPrice"].setValue(res.dailyPrice);

    });
  }

  getList(){
    this.additionalService.getList().subscribe((res) => {
      this.additionalServices = res.items;
    })
  }
}
