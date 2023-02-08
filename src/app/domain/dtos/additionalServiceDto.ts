export interface CreatedAdditinoalServiceDto{
    name:string;
    dailyPrice:number;
}

export interface DeletedAdditionalServiceDto{
    id:number;
}

export interface UpdatedAdditionalServiceDto{
    id:number;
    name:string;
    dailyPrice:number;
}


export interface GetListAdditionalServiceDto{
    id:number;
    name:string;
    dailyPrice:number;
}

export interface GetByIdAdditionalServiceDto{
    id:number;
    name:string;
    dailyPrice:number;
}

