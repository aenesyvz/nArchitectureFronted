import { BasePageableModel } from "./basePageableModel";

export interface ListResponseModel<T> extends BasePageableModel{
    items:T[]
}