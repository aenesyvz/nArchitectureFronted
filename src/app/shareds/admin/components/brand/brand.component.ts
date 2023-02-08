import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatedBrandDto, GetByIdBrandDto, GetListBrandDto, UpdatedBrandDto } from 'src/app/domain/dtos/brandDtos';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:GetListBrandDto[] = [];
  brandDto :GetByIdBrandDto;

  addForm:FormGroup;
  updateForm:FormGroup;

  id:number;
  name:string;

  constructor(
    private brandService:BrandService
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
      let branModel:CreatedBrandDto = Object.assign({},this.addForm.value);

      this.brandService.add(branModel).subscribe({

      });
    }
  }

  createUpdateForm(){
    this.updateForm = new FormGroup({
      id:new FormControl(0,Validators.required),
      name:new FormControl("",Validators.required)
    });
  }


  getByIdForUpdateForm(id:number){
    this.brandService.getById(id).subscribe((res) => {
      this.updateForm.controls["id"].setValue(res.id);
      this.updateForm.controls["name"].setValue(res.name);
    });
  }

  getById(id:number){
    this.brandService.getById(id).subscribe((res) => {
      this.brandDto = res;
    });
  }

  getList(){
    this.brandService.getAll().subscribe((res) => {
      this.brands = res.items;
    });
  }
  
}
