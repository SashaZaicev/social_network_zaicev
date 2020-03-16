import React from 'react'
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {LoginReduxForm} from "./LoginForm";


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            < h1> Login </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>)
}
const mstp = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mstp, {login})(Login);