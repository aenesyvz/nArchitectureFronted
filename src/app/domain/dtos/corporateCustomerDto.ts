export interface CreatedCorporateCustomerDto{
    customerId:number;
    companyName:string;
    TaxNo:string;
}

export interface DeletedCorporateCustomerDto{
    id:number;
}

export interface UpdatedCorporateCustomerDto{
    id:number;
    customerId:number;
    companyName:string;
    taxNo:string;
}
export interface GetByIdCorporateCustomerDto{
    id:number;
    customerId:number;
    companyName:string;
    taxNo:string;
}

export interface GetListCorporateCustomerDto{
    id:number;
    customerId:number;
    companyName:string;
    taxNo:string;
}