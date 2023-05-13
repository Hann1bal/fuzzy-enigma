import React, {FC, FormEvent, useContext} from "react";
import AuthService from "../Services/AuthService";
import {Context} from "../index";

export const LoginPage: FC = () => {
    const {store} = useContext(Context)

    async function Login(email: string, password: string, ) {
        store.login(email, password)
    }
    const onSubmitHandler = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { currentTarget } = event;
        const  data = new FormData(currentTarget);
        const entries = Array.from(data.entries()).reduce((acc:any, value:any)=>{
            const [name, item] = value;
            acc[name] = item;
            return acc;
        }, {})
        const {email, password} = entries;
        Login(email, password)
    }

    return <>
        <div className="a-login-form">
            <form onSubmit={onSubmitHandler}>
                <label>Email:<input id={"email"} name={"email"} type={"email"}></input></label>
                <label>Password:<input id={"password"}  name={"password"} type={"password"}></input></label>
                <input type={"submit"}></input>
            </form>
        </div>
    </>
}