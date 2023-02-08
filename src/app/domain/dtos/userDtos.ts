import { AccessToken } from "../models/accessToken";

export interface CreatedUserDto{
    email:string;
    password:string;
}

export interface DeletedUserDto{
    id:number;
}

export interface UpdatedUserDto{
    id:number;
    email:string;
    password:string;
}

export interface UpdatedUserFromAuthDto{
    id:number;
    email:string;
    password:string;
    newPassword?:string;
}

export interface GetUpdatedUserFromAuthDto{
    id:number;
    email:string;
    password:string;
    AccessToken:AccessToken;
}

export interface GetUserDto{
    id:number;
    email:string;
    password:string;
    status:boolean;
}

export interface GetListUserDto{
    id:number;
    email:string;
    password:string;
    status:boolean;
}