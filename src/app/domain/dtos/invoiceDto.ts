export interface CreatedInvoiceDto{
    customerId:number;
    no:string;
    createdDate:Date;
    rentalStartDate:Date;
    rentalEndDate:Date;
    totalRentalDate:number;
    rentalPrice:number;
}

export interface DeletedInvoiceDto{
    id:number;
}

export interface UpdatedInvoiceDto{
    id:number;
    customerId:number;
    no:string;
    createdDate:Date;
    rentalStartDate:Date;
    rentalEndDate:Date;
    totalRentalDate:number;
    rentalPrice:number;
}

export interface GetInvoiceDto{
    id:number;
    customerId:number;
    no:string;
    createdDate:Date;
    rentalStartDate:Date;
    rentalEndDate:Date;
    totalRentalDate:number;
    rentalPrice:number;
}

export interface GetListInvoiceDto{
    id:number;
    customerId:number;
    no:string;
    createdDate:Date;
    rentalStartDate:Date;
    rentalEndDate:Date;
    totalRentalDate:number;
    rentalPrice:number;
}