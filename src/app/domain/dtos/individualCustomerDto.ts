export interface CreatedIndividualCustomerDto{
    customerId:number;
    firstName:string;
    lastName:string;
    nationalIdentity:string;
}

export interface DeletedIndividualCustomerDto{
    id:number;
}

export interface UpdatedIndividualCustomerDto{
    id:number;
    customerId:number;
    firstName:string;
    lastName:string;
    nationalIdentity:string;
}

export interface GetIndividualCustomerDto{
    id:number;
    customerId:number;
    firstName:string;
    lastName:string;
    nationalIdentity:string;
}

export interface GetListIndividualCustomerDto{
    id:number;
    customerId:number;
    firstName:string;
    lastName:string;
    nationalIdentity:string;
}