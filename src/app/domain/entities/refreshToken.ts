export interface RefreshToken{
    id:number;
    token:string;
    expires:Date;
    created:Date;
    createdByIp:string;
    revoked?:Date;
    revokedByIp?:string;
    replacedByToken?:string;
    reasonRevoked?:string;
}