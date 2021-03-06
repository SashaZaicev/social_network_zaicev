import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {AddPostFormRedux} from "./MyPostForm";
// import {addCommentAC, updatePostAC} from "../../../redux/profilePageReducer";
// import {connect} from "react-redux";
// import {addMessage} from "../../../redux/State";


const MyPosts = (props) => {
    // let {messagesList,newMessage} = messagesList
    let newPostElement = React.createRef();
    let postItem = props.myPost.messagesList.map((m) => <Post key={m.id} message={m.message} likeCount={m.likeCount}/>);

    // let addPost = () => {
    //     dispatch({type: 'ADD-MESSAGE'});
    //     newPostElement.current.value = " ";
    // }
    // let addMessage = () => {
    //     let text = newPostElement.current.value;
    //     let action = {type: 'UPDATE-NEW-MESSAGE', text: text};
    //     dispatch(action);
    // }
    // let addPost = () => {
    //     let comment = newPostElement.current.value;
    //     let actionObj = addCommentAC(comment);
    //     dispatch(actionObj);
    //     newPostElement.current.value = '';
    // }
const addNewPost = (value) => {
    props.addPost(value.newMessage)
}
    return (
        <div className={s.myPosts}>
            <h4>My posts</h4>
            <div>
                {/*<div>
                    <textarea ref={newPostElement}
                              className={s.textareaSize}
                              value={props.newMessage}
                              onChange={(e)=>props.updatePost(e.currentTarget.value)}
                              // onKeyPress={this.handleKeyPress}
                    />
                </div>
                <div>
                    <button onClick= {() => {props.addPost(newPostElement.current.value)}} >Add post</button>
                </div>*/}
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postItem}
            </div>
        </div>)
};


export default (MyPosts);