import React from 'react';
import s from './Dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";
// import {addCommentAC} from "../../redux/profilePageReducer";
import {addMessageAC, updateCommentAC} from "../../redux/dialogPageReducer";
import {connect} from "react-redux";
// import {addMessage} from "../../redux/State";
// import Dialog from './Dialog/Dialog'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={`${s.user}`}>
        <div className={`${s.userLogo}`}> <img src={props.logoImg}/></div>
        <NavLink to={path} activeClassName={s.activeLink}>
            {props.name}
        </NavLink>
    </div>
}
const Messages = (props) => {
    // debugger;
    return (<div className={s.message}>
        {props.name}

    </div>)
}

const Dialogs = (props) => {
    let dialogsItem =
        props.messageList.dialogsData.map((d) => <DialogItem name={d.name} key={d.id} logoImg={d.logo}/>);
    let messagesItem = props.messageList.messagesData.map((m) => <Messages name={m.name}/>)
    let newMessageElement = React.createRef();

// if (!props.isAuth) return <Redirect to = {'/login'}/>;
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <h3 className={s.h3}>dialogs</h3>
                {dialogsItem}
            </div>
            <div className={s.messages}>
                {messagesItem}
            </div>
            <div>
                <div>
                    <textarea ref={newMessageElement}
                              className={s.textareaSize}
                              onChange={(e)=>{props.updateComment(e.currentTarget.value)}}
                              value={props.newComment}
                    />
                </div>
                <div>
                    <button onClick={()=>{props.addPost2(newMessageElement.current.value)}}>Add post</button>
                </div>

            </div>
        </div>
    )
}
export default Dialogs;