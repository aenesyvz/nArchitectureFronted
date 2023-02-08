export interface Invoice{
    id:number;
    customerId:number;
    no:number;
    createdDate:Date;
    rentalStartDate:Date;
    rentalEndDate:Date;
    totalRentalDate:number;
    rentalPrice:number;
}