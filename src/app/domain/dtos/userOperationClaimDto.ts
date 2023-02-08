export interface CreatedUserOperationClaimDto{
    userId:number;
    operationClaimId:number;
}

export interface DeletedUserOperationClaimDto{
   id:number;
}

export interface UpdatedUserOperationClaimDto{
    id:number;
    userId:number;
    operationClaimId:number;
}

export interface GetUserOperationClaimDto{
    id:number;
    userId:number;
    operationClaimId:number;
}

export interface GetListUserOperationClaimDto{
    id:number;
    userId:number;
    operationClaimId:number;
}