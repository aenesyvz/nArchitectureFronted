export interface EmailAuthenticator{
    id:number;
    userId:number;
    activationKey?:string;
    isVerified:boolean;
}