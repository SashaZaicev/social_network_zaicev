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
    addPost2: (newComment) =>
        dispatch(addMessageAC(newComment)),
    updateComment: (text) =>
        dispatch(updateCommentAC(text))
})
// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mstp, mdtp)(AuthRedirectComponent);
export default compose(connect(mstp, mdtp),withAuthRedirect)(Dialogs);