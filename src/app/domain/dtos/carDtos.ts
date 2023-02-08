import { CarState } from "../enums/carState";
export interface GetListCarDto{
    id:number;
    brandName:string;
    modelName:string;
    colorName:string;
    plate:string;
    carState:CarState;
    modelYear:number;
}

export interface GetCarDto{
    id:number;
    brandName:string;
    modelName:string;
    colorName:string;
    plate:string;
    carState:CarState;
    modelYear:number;
}
export interface DeliverRentalCarDto{
    id:number;
}

export interface MaintainCarDto{
    id:number;
}

export interface GetByIDCarDto{
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

export interface CreatedCarDto{
    colorId:number;
    modelId:number;
    rentalBranchId:number;
    carState:CarState;
    kilometer:number;
    modelYear:number;
    plate:string;
    minFindeksCreditRate:number;
}

export interface DeletedCarDto{
    id:number;
}

export interface UpdatedCarDto{
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
