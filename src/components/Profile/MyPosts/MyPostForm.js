import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

let maxLength10=maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessage' validate={[required, maxLength10]} placeholder='Enter your post'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>)
};
export const AddPostFormRedux = reduxForm({form: 'AddPostForm'})(AddPostForm)
export default AddPostForm

// export default AddDialogForm
