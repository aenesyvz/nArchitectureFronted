export interface CreatedFindeksCreditRateDto{
    customerId:number;
    score:number;
}

export interface DeletedFindeksCreditRateDto{
    id:number;
}

export interface UpdatedByUserIdFindeksCreditRateFromServiceDto{
    userId:number;
    identityNumber:string;
}

export interface UpdatedFindeksCreditRateDto{
    id:number;
    customerId:number;
    score:number;
}

export interface UpdatedFindeksCreditRateFromServiceDto{
    id:number;
    identityNumber:string;
}


export interface GetByCustomerIdFindeksCreditRateDto{
    customerId:number;
}

export interface GetFindeksCreditRateDto{
    id:number;
    customerId:number;
    score:number;
}

export interface GetListFindeksCreditRateDto{
    id:number;
    customerId:number;
    score:number;
}