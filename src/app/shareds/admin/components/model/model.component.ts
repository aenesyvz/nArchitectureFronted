import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatedModelDto, GetListModelDto, GetModelDto, UpdatedModelDto } from 'src/app/domain/dtos/modelDto';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  model:GetModelDto;
  models:GetListModelDto[] = [];
  
  addForm:FormGroup;
  updateForm:FormGroup;

  id:number;
  name:string;
  dailyPrice:number;
  brandId:number;
  transmissionId:number;
  fuelId:number;
  imageUrl:string;

  constructor(
    private modelService:ModelService
  ) { }

  ngOnInit(): void {
  }

  createAddForm(){
    this.addForm = new FormGroup({
      name:new FormControl("",Validators.required),
      dailyPrice:new FormControl(0,Validators.required),
      brandId:new FormControl(0,Validators.required),
      transmissionId:new FormControl(0,Validators.required),
      fuelId:new FormControl(0,Validators.required),
      imageUrl:new FormControl("",Validators.required)
    });
  }

  add(){
    if(this.addForm.valid){
      let modelModel:CreatedModelDto = Object.assign({},this.addForm.value);
      this.modelService.add(modelModel).subscribe({});
    }
  }

  createUpdateForm(){
    this.updateForm = new FormGroup({
      id:new FormControl(0,Validators.required),
      name:new FormControl("",Validators.required),
      dailyPrice:new FormControl(0,Validators.required),
      brandId:new FormControl(0,Validators.required),
      transmissionId:new FormControl(0,Validators.required),
      fuelId:new FormControl(0,Validators.required),
      imageUrl:new FormControl("",Validators.required)
    });
  }


  update(){
    if(this.updateForm.valid){
      let modelModel:UpdatedModelDto = Object.assign({},this.updateForm.value);
      this.modelService.add(modelModel).subscribe({});
    }
  }

  getById(id:number){
    this.modelService.getById(id).subscribe((res) => {
      this.model = res;
    })
  }

  getByIdForForm(id:number){
    this.modelService.getById(id).subscribe((res) => {
      this.updateForm.controls["id"].setValue(res.id);
      this.updateForm.controls["name"].setValue(res.name);
      this.updateForm.controls["dailyPrice"].setValue(res.dailyPrice);
      this.updateForm.controls["brandId"].setValue(res.brandId);
      this.updateForm.controls["transmissionId"].setValue(res.transmissionId);
      this.updateForm.controls["fuelId"].setValue(res.fuelId);
      this.updateForm.controls["imageUrl"].setValue(res.imageUrl);
    });
  }
  getList(){
    this.modelService.getList().subscribe((res) => {
      this.models = res.items;
    });
  }
}
