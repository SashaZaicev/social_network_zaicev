import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import styleError from "../Common/FormsControls/FormsControls.module.css"

let maxLength30 = maxLengthCreator(30)
let maxLength16 = maxLengthCreator(16)
const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field validate={[required]}
                       component={Input}
                       placeholder={'Email'}
                       name={'email'}/></div>
            <div><Field validate={[required]}
                        component={Input}
                        placeholder={'Password'}
                        name={'password'}
                        type={'password'}/></div>
            <div><Field component={Input} name={"rememberMe"} type={"checkbox"}/>remember me
            </div>
            {error &&
            <div className={`${styleError.formSummaryError}`}>
                {error}
            </div>
            }
            <div>
                <button type='submit'>LOGIN</button>
            </div>
        </form>
    )
};
// export default LoginForm
export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)