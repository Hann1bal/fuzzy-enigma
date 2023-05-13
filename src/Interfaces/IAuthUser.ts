import {IUserModel} from "./IUserModel";

export interface IAuthUser {
    accessToken: string,
    refreshToken: string;
    expiration: string;
    user: IUserModel;
}