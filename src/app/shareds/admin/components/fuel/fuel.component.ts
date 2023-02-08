import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatedFuelDto, GetFuelDto, GetListFuelDto, UpdatedFuelDto } from 'src/app/domain/dtos/fuelDto';
import { FuelService } from 'src/app/services/fuel.service';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.css']
})
export class FuelComponent implements OnInit {

  fuels:GetListFuelDto[] = [];
  fuel:GetFuelDto;

  addForm:FormGroup;
  updateForm:FormGroup;

  id:number;
  name:string;

  constructor(
    private fuelService:FuelService
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
      let fuelModel:CreatedFuelDto = Object.assign({},this.addForm.value);

      this.fuelService.add(fuelModel).subscribe({});
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
      let fuelModel:UpdatedFuelDto = Object.assign({},this.updateForm.value);

      this.fuelService.udpate(fuelModel).subscribe({});
    }
  }

  getByIdForUpdateForm(id:number){
    this.fuelService.getById(id).subscribe((res) => {
      this.updateForm.controls["id"].setValue(res.id);
      this.updateForm.controls["name"].setValue(res.name);
    })
  }

  getById(id:number){
    this.fuelService.getById(id).subscribe((res) => {
      this.fuel = res;
    });
  }

  getAll(){
    this.fuelService.getList().subscribe((res)=>{
      this.fuels = res.items;
    });
  }
}
