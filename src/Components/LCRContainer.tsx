import {FC, FormEvent, useContext, useEffect, useState} from "react";
import {Context} from "../index";
import logo from "../logo-bottle.png"
import "../Container.css";
import {MessageBox} from "./MessageBox";
import IPosts from "../Interfaces/IPosts";
import PostsApi from "../Services/PostsApi";
import {Debugger} from "inspector";

export const LCRContainer: FC = () => {
    const {store} = useContext(Context)
    const [posts, setPosts] = useState<IPosts[]>([]);
    useEffect(() => {
        if (posts?.length === 0) {
            const data = async () => {
                var response = await PostsApi.get();
                setPosts(response.data)
            }
            data();
        }
    }, [posts])
    async function SendPost(textBody:string, userId:number){
        await PostsApi.post("",textBody, userId)
        setPosts([])
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
        const {textBody} = entries;
        console.log(textBody, )
        SendPost(textBody, store.getuserid())
    }
    return (<>
        <div className={"Container"}>
            <div className={"Container-right"}>
                <h1 style={{textAlign:"center",  color:"blue"}}><img src={logo}/>Бурлиттор</h1>
            </div>
            <div className={"Container-mid"}>
                <div>
                    <form className={"Form"} onSubmit={onSubmitHandler}>
                        <textarea className={"Input-row"} name="textBody" placeholder={"Введите свой бульк"}/>
                        <input type="submit" className={"Input-submit"} value="Submit"/>
                    </form>
                </div>
                <div>
                    {posts?.reverse().map(poster => <MessageBox id={poster.id} Title={poster.Title} textBody={poster.textBody} userName={poster.userName} comments={poster.comments}/>)}

                </div>
            </div>
            <div className={"Container-left"}>
                asdasd
            </div>
        </div>
    </>)
}