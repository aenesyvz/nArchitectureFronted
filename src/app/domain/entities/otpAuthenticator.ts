export interface OtpAuthenticator{
    id:number;
    userId:number;
    secretKey:number[];
    isVerified:boolean;
}