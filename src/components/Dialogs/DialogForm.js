import React from 'react';
import s from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../Common/FormsControls/FormsControls";
let maxLength50=maxLengthCreator(50);

export const AddDialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  component={Textarea} name='newComment' placeholder='Enter your message' validate={[required,maxLength50]}/>

            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>)
};
export const AddMessageFormRedux = reduxForm({form: 'addDialogForm'})(AddDialogForm)
// export default AddDialogForm

// export default AddDialogForm
