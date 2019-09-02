import React from 'react';
import s from './Dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";
<<<<<<< HEAD
import {AddMessageFormRedux} from "./DialogForm";
// import {addCommentAC} from "../../redux/profilePageReducer";
// import {addMessageAC, updateCommentAC} from "../../redux/dialogPageReducer";
// import {connect} from "react-redux";
=======
// import {addCommentAC} from "../../redux/profilePageReducer";
import {addMessageAC, updateCommentAC} from "../../redux/dialogPageReducer";
import {connect} from "react-redux";
>>>>>>> e91ac68bd2d2a53d9e6e6c5aed414e5f5316a5d5
// import {addMessage} from "../../redux/State";
// import Dialog from './Dialog/Dialog'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={`${s.user}`}>
<<<<<<< HEAD
        <div className={`${s.userLogo}`}><img src={props.logoImg}/></div>
=======
        <div className={`${s.userLogo}`}> <img src={props.logoImg}/></div>
>>>>>>> e91ac68bd2d2a53d9e6e6c5aed414e5f5316a5d5
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

<<<<<<< HEAD

const Dialogs = (props) => {

    const addNewMessage = (value) => {
        props.addPost2(value.newComment)
    }
    let dialogsItem =
        props.messageList.dialogsData.map((d) => <DialogItem name={d.name} key={d.id} logoImg={d.logo}/>);
    let messagesItem = props.messageList.messagesData.map((m) => <Messages name={m.name}/>)
    // let newMessageElement = React.createRef();
=======
const Dialogs = (props) => {
    let dialogsItem =
        props.messageList.dialogsData.map((d) => <DialogItem name={d.name} key={d.id} logoImg={d.logo}/>);
    let messagesItem = props.messageList.messagesData.map((m) => <Messages name={m.name}/>)
    let newMessageElement = React.createRef();
>>>>>>> e91ac68bd2d2a53d9e6e6c5aed414e5f5316a5d5

// if (!props.isAuth) return <Redirect to = {'/login'}/>;
    return (
        <div className={s.dialogs}>
<<<<<<< HEAD
=======

>>>>>>> e91ac68bd2d2a53d9e6e6c5aed414e5f5316a5d5
            <div className={s.dialogsItems}>
                <h3 className={s.h3}>dialogs</h3>
                {dialogsItem}
            </div>
            <div className={s.messages}>
                {messagesItem}
            </div>
            <div>
<<<<<<< HEAD
                <AddMessageFormRedux onSubmit={addNewMessage}/>
=======
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

>>>>>>> e91ac68bd2d2a53d9e6e6c5aed414e5f5316a5d5
            </div>
        </div>
    )
}
export default Dialogs;