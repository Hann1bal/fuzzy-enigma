import {AxiosResponse} from 'axios';
import {IAuthUser} from "../Interfaces/IAuthUser";
import $api from "./index";
import IPosts from "../Interfaces/IPosts";

export default class PostsApi {
    static async post(title: string, textBody: string, userId:number): Promise<AxiosResponse<IPosts>> {
        return $api.post<IPosts>('Post/Add', {title, textBody, userId})
    }

    static async get(): Promise<AxiosResponse<IPosts[]>> {
        return $api.get<IPosts[]>("Post/GetAll/")
    }
}