import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatedColorDto, GetByIdColorDto, GetListColorDto, UpdatedColorDto } from 'src/app/domain/dtos/colorDtos';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:GetListColorDto[] = [];
  color:GetByIdColorDto;

  addForm:FormGroup;
  updateForm:FormGroup;

  id:number;
  name:string;

  constructor(
    private colorService:ColorService
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
      let colorModel :CreatedColorDto = Object.assign({},this.addForm.value);
      this.colorService.add(colorModel).subscribe({});
    }
  }

  createUpdate(){
   this.updateForm = new FormGroup({
    id:new FormControl(0,Validators.required),
    name:new FormControl("",Validators.required)
   });
  }

  update(){
    if(this.updateForm.valid){
      let colorModel:UpdatedColorDto= Object.assign({},this.updateForm.value);

      this.colorService.update(colorModel).subscribe({});
    }
  }

  getByIdForUpdateForm(id:number){
    this.colorService.getById(id).subscribe((res)=> {
      this.updateForm.controls["id"].setValue(res.id);
      this.updateForm.controls["name"].setValue(res.name);
    });
  }

  getById(id:number){
    this.colorService.getById(id).subscribe((res) => {
      this.color = res;
    })
  }

}
