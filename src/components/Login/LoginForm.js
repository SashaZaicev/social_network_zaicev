import React from 'react'
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} name={'login'} type="text" component={'input'} /></div>
            <div><Field placeholder={'Password'} name={'password'} type="text" component={'input'}/></div>
            <div><Field  name={'rememberMe'} component={'input'} type="checkbox"/>remember me</div>
            <div><button type='submit'>LOGIN</button></div>
        </form>
    )
};
export default LoginForm
export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)