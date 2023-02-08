export interface CarDamageDto{
    id:number;
    carId:number;
    damageDescription:string;
    isFixed:boolean;
}

export interface GetListCarDamageDto{
    id:number;
    carModelBrandName:string;
    carModelName:string;
    carModelYear:number;
    carPlate:string;
    damageDescription:string;
    isFixed:boolean;
}

export interface GetByIdCarDamageDto{
    id:number;
}

export interface GetListByCarIdCarDamageDto{
    carId:number;
}

export interface CreatedCarDamageDto{
    carId:number;
    damageDescription:string;
}

export interface UpdatedCarDamageDto{
    id:number;
    carId:number;
    damageDescription:string;
    isFixed:boolean;
}

export interface DeletedCarDamageDto{
    id:number;
}