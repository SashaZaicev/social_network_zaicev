import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
<<<<<<< HEAD
import {AddPostFormRedux} from "./MyPostForm";
=======
>>>>>>> e91ac68bd2d2a53d9e6e6c5aed414e5f5316a5d5
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
<<<<<<< HEAD
const addNewPost = (value) => {
    props.addPost(value.newMessage)
}
=======

>>>>>>> e91ac68bd2d2a53d9e6e6c5aed414e5f5316a5d5
    return (
        <div className={s.myPosts}>
            <h4>My posts</h4>
            <div>
<<<<<<< HEAD
                {/*<div>
=======
                <div>
>>>>>>> e91ac68bd2d2a53d9e6e6c5aed414e5f5316a5d5
                    <textarea ref={newPostElement}
                              className={s.textareaSize}
                              value={props.newMessage}
                              onChange={(e)=>props.updatePost(e.currentTarget.value)}
                              // onKeyPress={this.handleKeyPress}
                    />
                </div>
                <div>
                    <button onClick= {() => {props.addPost(newPostElement.current.value)}} >Add post</button>
<<<<<<< HEAD
                </div>*/}
                <AddPostFormRedux onSubmit={addNewPost}/>
=======
                </div>

>>>>>>> e91ac68bd2d2a53d9e6e6c5aed414e5f5316a5d5
            </div>
            <div className={s.posts}>
                {postItem}
            </div>
        </div>)
};


export default (MyPosts);