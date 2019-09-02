import React from 'react';
import {addMessageAC, updateCommentAC} from "../../redux/dialogPageReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {Redirect} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mstp = (state) => ({
    messageList: state.dialogPage,
    newComment: state.dialogPage.newComment,
    // isAuth: state.auth.isAuth
})
const mdtp = (dispatch) => ({
<<<<<<< HEAD
    addPost2: (newComment) =>
        dispatch(addMessageAC(newComment)),
=======
    addPost2: (newMessageElement) =>
        dispatch(addMessageAC(newMessageElement)),
>>>>>>> e91ac68bd2d2a53d9e6e6c5aed414e5f5316a5d5
    updateComment: (text) =>
        dispatch(updateCommentAC(text))
})
// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mstp, mdtp)(AuthRedirectComponent);
export default compose(connect(mstp, mdtp),withAuthRedirect)(Dialogs);