import {Roles} from "./IRoles";


export interface IUserModel {
    id: number;
    userName: string;
    email:string;
    roles: Roles[];
    isActivate:boolean;

}