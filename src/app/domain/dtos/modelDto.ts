export interface CreatedModelDto{
    name:string;
    dailyPrice:number;
    brandId:number;
    transmissionId:number;
    fuelId:number;
    imageUrl:string;
}

export interface DeletedModelDto{
    id:number;
}

export interface UpdatedModelDto{
    id:number;
    name:string;
    dailyPrice:number;
    brandId:number;
    transmissionId:number;
    fuelId:number;
    imageUrl:string;
}

export interface GetModelDto{
    id:number;
    name:string;
    dailyPrice:number;
    brandId:number;
    transmissionId:number;
    fuelId:number;
    imageUrl:string;
}

export interface GetListModelDto{
    id:number;
    brandName:string;
    fuelName:string;
    transmissionName:string;
    name:string;
    dailyPrice:number;
    imageUrl:string;
}