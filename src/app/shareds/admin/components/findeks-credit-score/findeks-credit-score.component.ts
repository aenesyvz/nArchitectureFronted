import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatedFindeksCreditRateDto, GetFindeksCreditRateDto, GetListFindeksCreditRateDto, UpdatedFindeksCreditRateDto } from 'src/app/domain/dtos/findeksCreditRatesDto';
import { FindeksCreditScoreService } from 'src/app/services/findeks-credit-score.service';

@Component({
  selector: 'app-findeks-credit-score',
  templateUrl: './findeks-credit-score.component.html',
  styleUrls: ['./findeks-credit-score.component.css']
})
export class FindeksCreditScoreComponent implements OnInit {
  findeksCreditScores:GetListFindeksCreditRateDto[] = [];
  findeksCreditScore:GetFindeksCreditRateDto;

  addForm:FormGroup;
  updateForm:FormGroup;

  id:number;
  customerId:number;
  score:number;

  constructor(
    private findeksCreditScoreService:FindeksCreditScoreService
  ) { }

  ngOnInit(): void {
  }

  createAddForm(){
    this.addForm = new FormGroup({
      customerId:new FormControl(0,Validators.required),
      score:new FormControl(0,Validators.required)
    });
  }

  add(){
    if(this.addForm.valid){
      let findeksCreditScoreModel:CreatedFindeksCreditRateDto = Object.assign({},this.addForm.value);

      this.findeksCreditScoreService.add(findeksCreditScoreModel).subscribe({});
    }
  }

  createUpdateForm(){
    this.updateForm = new FormGroup({
      id:new FormControl(0,Validators.required),
      customerId:new FormControl(0,Validators.required),
      score:new FormControl(0,Validators.required)
    });
  }

  update(){
    if(this.updateForm.valid){
      let findeksCreditScoreModel:UpdatedFindeksCreditRateDto = Object.assign({},this.updateForm.value);

      this.findeksCreditScoreService.update(findeksCreditScoreModel).subscribe({});
    }
  }

  getByIdForUpdateForm(id:number){
    this.findeksCreditScoreService.getById(id).subscribe((res) => {
      this.updateForm.controls["id"].setValue(res.id);
      this.updateForm.controls["customerId"].setValue(res.customerId);
      this.updateForm.controls["score"].setValue(res.score);
    });
  }

  getById(id:number){
    this.findeksCreditScoreService.getById(id).subscribe((res)=> {
      this.findeksCreditScore = res;
    })
  }

  getAll(){
    this.findeksCreditScoreService.getAll().subscribe((res)=>{
      this.findeksCreditScores = res.items;
    })
  }

}
