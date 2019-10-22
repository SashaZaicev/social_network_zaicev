import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

let maxLength30 = maxLengthCreator(30)
let maxLength16 = maxLengthCreator(16)
const LoginForm = (props) => {
    // debugger
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div><Field validate={[required]} component={Input} placeholder={'Login'} name={'login'}/></div>
            <div><Field validate={[required]} component={Input} placeholder={'Password'} name={'password'} /></div>
            <div><Field  name={'rememberMe'} component={'input'} type="checkbox"/>remember me</div>
            <div><button type='submit'>LOGIN</button></div>
        </form>
    )
};
export default LoginForm
export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)