import { CarState } from "../enums/carState";

export interface Car{
    id:number;
    colorId:number;
    modelId:number;
    rentalBranchId:number;
    carState:CarState;
    kilometer:number;
    modelYear:number;
    plate:string;
    minFindeksCreditRate:number;
}