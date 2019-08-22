import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
// import {addCommentAC, updatePostAC} from "../../../redux/profilePageReducer";
// import {connect} from "react-redux";
// import {addMessage} from "../../../redux/State";


const MyPosts = (props) => {
    // debugger;
    // let {messagesList,newMessage} = messagesList
    let newPostElement = React.createRef();
    let postItem = props.myPost.messagesList.map((m) => <Post message={m.message} likeCount={m.likeCount}/>);

    // let addPost = () => {
    //     dispatch({type: 'ADD-MESSAGE'});
    //     newPostElement.current.value = " ";
    // }
    // let addMessage = () => {
    //     // debugger;
    //     let text = newPostElement.current.value;
    //     let action = {type: 'UPDATE-NEW-MESSAGE', text: text};
    //     dispatch(action);
    // }
    // let addPost = () => {
    //     // debugger;
    //     let comment = newPostElement.current.value;
    //     let actionObj = addCommentAC(comment);
    //     dispatch(actionObj);
    //     newPostElement.current.value = '';
    // }

    return (
        <div className={s.myPosts}>
            <h4>My posts</h4>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              className={s.textareaSize}
                              value={props.newMessage}
                              onChange={(e)=>props.updatePost(e.currentTarget.value)}
                              // onKeyPress={this.handleKeyPress}
                    />
                </div>
                <div>
                    <button onClick= {() => {props.addPost(newPostElement.current.value)}} >Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postItem}
            </div>
        </div>)
};


export default (MyPosts);