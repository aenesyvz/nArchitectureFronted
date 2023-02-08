import { City } from "../entities/city";

export interface CreatedRentalBranchDto{
    city:City;
}

export interface UpdatedRentalBranchDto{
    id:number;
    city:City;
}

export interface DeletedRentalBranchDto{
    id:number;
}

export interface GetRentalBranchDto{
    id:number;
    city:City;
}

export interface GetListRentalBranchDto{
    id:number;
    city:City;
}