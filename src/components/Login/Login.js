import React from 'react'
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {LoginReduxForm} from "./LoginForm";


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captchaUrl)
    };
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            < h1> Login </h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>)
}
const mstp = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mstp, {login})(Login);