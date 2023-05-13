import {AxiosResponse} from 'axios';
import {IAuthUser} from "../Interfaces/IAuthUser";
import $api from "./index";
import {IUserModel} from "../Interfaces/IUserModel";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<IAuthUser>> {
        return $api.post<IAuthUser>('Account/Login', {email, password})
    }
    static async getme(): Promise<AxiosResponse<IUserModel>> {
        return $api.get<IUserModel>('Account/GetMe')
    }
    static async refresh(accessToken: string, refreshToken: string): Promise<AxiosResponse<IAuthUser>> {
        return $api.post<IAuthUser>('Account/Refresh/', {accessToken, refreshToken})
    }

    static async logout(): Promise<void> {
        return $api.post("Account/Logout/")
    }
}