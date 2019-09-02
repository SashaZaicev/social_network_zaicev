import React from 'react';
import s from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";

const AddDialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newComment' placeholder='Enter your message'/>
                  {/*  <textarea ref={newMessageElement}
                              className={s.textareaSize}
                              onChange={(e) => {
                                  props.updateComment(e.currentTarget.value)
                              }}
                              value={props.newComment}
                    />*/}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>)
};
export const AddMessageFormRedux = reduxForm({form: 'addDialogForm'})(AddDialogForm)
export default AddDialogForm

// export default AddDialogForm
