export interface CreatedRentalDto{
    modelId:number;
    customerId:number;
    rentStartDate:Date;
    rentEndDate:Date;
    rentStartRentalBranchId:number;
    rentEndRentalBranchId:number;
    additionalServiceIds:number[];
}

export interface DeletedRentalDto{
    id:number;
}

export interface PickUpRentalDto{
    id:number;
    rentalEndRentalBranchId:number;
    returnDate:Date;
    rentalEndKilometer:number;
}

export interface UpdatedRentalDto{
    id:number;
    carId:number;
    customerId:number;
    rentStartRentalBranchId:number;
    rentEndRentalBranchId?:number;
    rentStartDate:Date;
    rentEndDate:Date;
    returnDate?:Date;
    rentStartKilometer:number;
    rentEndKilometer?:number;
}

export interface GetRentalDto{
    id:number;
    carId:number;
    customerId:number;
    rentStartRentalBranchId:number;
    rentEndRentalBranchId?:number;
    rentStartDate:Date;
    rentEndDate:Date;
    returnDate?:Date;
    rentStartKilometer:number;
    rentEndKilometer?:number;
}

export interface GetListRentalDto{
    id:number;
    carModelBrandName:string;
    carModelName:string;
    carColorName:string;
    carModelYear:number;
    carPlate:string;
    customerFullName:string;
    customerMail:string;
    rentStartDate:Date;
    rentEndDate:Date;
    returnDate?:Date;
}