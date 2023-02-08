import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatedCarDamageDto, GetByIdCarDamageDto, GetListCarDamageDto, UpdatedCarDamageDto } from 'src/app/domain/dtos/carDamageDtos';
import { CarDamageService } from 'src/app/services/car-damage.service';

@Component({
  selector: 'app-car-damage',
  templateUrl: './car-damage.component.html',
  styleUrls: ['./car-damage.component.css']
})
export class CarDamageComponent implements OnInit {

  carDamages :GetListCarDamageDto[] = [];
  carDamage:GetByIdCarDamageDto;

  addForm:FormGroup;
  updateForm:FormGroup;

  id:number;
  carId:number;
  damageDescription:string;
  isFixed:boolean;
  
  constructor(
    private carDmaageService:CarDamageService
  ) { }

  ngOnInit(): void {
  }

  createAddForm(){
    this.addForm = new FormGroup({
      carId:new FormControl(0,Validators.required),
      damageDescription:new FormControl("",Validators.required)
    });
  }

  add(){
    if(this.addForm.valid){
      let carDamageModel: CreatedCarDamageDto = Object.assign({},this.addForm.value);

      this.carDmaageService.add(carDamageModel).subscribe({});
    }
  }

  createUpdateForm(){
    this.updateForm = new FormGroup({
      id:new FormControl(0,Validators.required),
      carId:new FormControl(0,Validators.required),
      damageDescription:new FormControl("",Validators.required),
      isFixed:new FormControl(true,Validators.required)
    });
  }

  update(){
    if(this.updateForm.valid){
      let updateCarDamageModel:UpdatedCarDamageDto = Object.assign({},this.updateForm.value);

      this.carDmaageService.update(updateCarDamageModel).subscribe({});
    }
  }

  getByIdForUpdate(id:number){
    this.carDmaageService.getById(id).subscribe((res) => {
      this.updateForm.controls["id"].setValue(res.id);
      this.updateForm.controls["carId"].setValue(res.carId);
      this.updateForm.controls["damageDescription"].setValue(res.damageDescription);
      this.updateForm.controls["isFixed"].setValue(res.isFixed);
    });
  }

  getById(id:number){
    this.carDmaageService.getById(id).subscribe((res) => {
      this.carDamage = res;
    })
  }

  getList(){
    this.carDmaageService.getList().subscribe((res) => {
      this.carDamages = res.items;
    })
  }
}
