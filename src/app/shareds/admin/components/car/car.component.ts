import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatedCarDto, GetByIDCarDto, GetListCarDto, UpdatedCarDto } from 'src/app/domain/dtos/carDtos';
import { CarState } from 'src/app/domain/enums/carState';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:GetListCarDto[] = [];
  car:GetByIDCarDto;

  addForm:FormGroup;
  updateForm:FormGroup;

  id:number;
  brandName:string;
  modelName:string;
  colorName:string;
  plate:string;
  carState:CarState;
  modelYear:number;

  constructor(
    private carService:CarService
  ) { }

  ngOnInit(): void {
  }

  createAddForm(){
    this.addForm = new FormGroup({
      colorId:new FormControl(0,Validators.required),
      modelId:new FormControl(0,Validators.required),
      rentalBranchId:new FormControl(0,Validators.required),
      carState: new FormControl({},Validators.required),
      kilometer:new FormControl(0,Validators.required),
      modelYear:new FormControl(0,Validators.required),
      plate:new FormControl("",Validators.required),
      minFindeksCreditRate:new FormControl(0,Validators.required)
    });
  }

  add(){
    if(this.addForm.valid){
      let carModel:CreatedCarDto = Object.assign({},this.addForm.value);

      this.carService.add(carModel).subscribe({});
    }
  }


  createUpdateForm(){
    this.updateForm = new FormGroup({
      id:new FormControl(0,Validators.required),
      colorId:new FormControl(0,Validators.required),
      modelId:new FormControl(0,Validators.required),
      rentalBranchId:new FormControl(0,Validators.required),
      carState: new FormControl({},Validators.required),
      kilometer:new FormControl(0,Validators.required),
      modelYear:new FormControl(0,Validators.required),
      plate:new FormControl("",Validators.required),
      minFindeksCreditRate:new FormControl(0,Validators.required)
    })
  }

  update(){
    if(this.updateForm.valid){
      let carModel:UpdatedCarDto = Object.assign({},this.updateForm.value);

      this.carService.udpate(carModel).subscribe({});
    }
  }

  getByIdForUpdateForm(id:number){
    this.carService.getById(id).subscribe((res) => {
      this.updateForm.controls["id"].setValue(res.id);
      this.updateForm.controls["colorId"].setValue(res.colorId);
      this.updateForm.controls["modelId"].setValue(res.modelId);
      this.updateForm.controls["rentalBranchId"].setValue(res.rentalBranchId);
      this.updateForm.controls["carState"].setValue(res.carState);
      this.updateForm.controls["modelYear"].setValue(res.modelYear);
      this.updateForm.controls["plate"].setValue(res.plate);
      this.updateForm.controls["minFindeksCreditRate"].setValue(res.minFindeksCreditRate);
    });
  }

  getById(id:number){
    this.carService.getById(id).subscribe((res) => {
      this.car = res;
    });
  }

  getList(){
    this.carService.getList().subscribe((res) => {
      this.cars = res.items;
    });
  }
}
