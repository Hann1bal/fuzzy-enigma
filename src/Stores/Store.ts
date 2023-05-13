import {observable, action, makeAutoObservable} from "mobx";
import {IUserModel} from "../Interfaces/IUserModel";
import AuthService from "../Services/AuthService";

export default class Store {
    user = {} as IUserModel;
    isAuth = false;

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUserModel) {
        this.user = user;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response.data, response.headers)
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            this.setAuth(true);
            this.setUser(response.data.user)
            console.log(this.isAuth, "store")
        } catch (e) {
            console.log(e)
        }
    }

    async refresh() {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        if (accessToken !== null && refreshToken !== null) {
            const response = await AuthService.refresh(accessToken, refreshToken)
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            this.setAuth(true);
            this.setUser(response.data.user)
        } else {
            this.setAuth(false)
        }
    }

    getuserid() {
        console.log(this.user.id)
        return this.user.id;
    }

    async check_auth() {
        try {
            var response = await AuthService.getme();
            if (response.status === 200) {
                this.setAuth(true)
                this.setUser(response.data)
            }
            console.log(this.user)
            return true
        } catch (e) {
            const accessToken = localStorage.getItem('accessToken');
            const refreshToken = localStorage.getItem('refreshToken');
            if (accessToken !== null && refreshToken !== null) {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                localStorage.removeItem('user');
            }
            this.setAuth(false)
            return false;
        }

    }
}