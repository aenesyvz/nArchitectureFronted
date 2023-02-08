export interface Rental{
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