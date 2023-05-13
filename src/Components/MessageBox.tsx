import {FC, JSX} from "react";
import IPosts from "../Interfaces/IPosts";
import "../Post.css"

export const MessageBox: FC<IPosts> = ({id, comments, userName, textBody, Title}: IPosts) => {
    return( <div className={"PostCard"} key={id}>
        <span>{userName} булькнул:</span>
        <span style={{alignSelf:"center"}}>{textBody}</span>
        Коментарии:<br/>
        {comments?.map(c => <li key={c.id}>Text:{c.textBody} by {c.userName}</li>
        )}
    </div>)
}
