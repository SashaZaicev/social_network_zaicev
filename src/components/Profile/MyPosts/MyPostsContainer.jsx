import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addCommentAC, updatePostAC} from "../../../redux/profilePageReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
// import {addMessage} from "../../../redux/State";


const mstp = (state) => ({
    myPost: state.profilePage,
    newMessage: state.profilePage.newMessage
})
const mdtp = (dispatch) => ({
<<<<<<< HEAD
    addPost: (newMessage) => dispatch(addCommentAC(newMessage)),
=======
    addPost: (newPostElement) => dispatch(addCommentAC(newPostElement)),
>>>>>>> e91ac68bd2d2a53d9e6e6c5aed414e5f5316a5d5
    updatePost: (textPost) => dispatch(updatePostAC(textPost))

})

let MyPostsContainer = connect (mstp, mdtp)(MyPosts);
export default MyPostsContainer;