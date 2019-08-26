import React from 'react';
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessage' placeholder='Enter your post'/>
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
export const AddPostFormRedux = reduxForm({form: 'AddPostForm'})(AddPostForm)
export default AddPostForm

// export default AddDialogForm
