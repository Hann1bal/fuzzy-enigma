import IComment from "./IComment";

export default  interface IPosts{
    id: number;
    Title:string;
    textBody: string;
    userName: string;
    comments: IComment[]|null;
}