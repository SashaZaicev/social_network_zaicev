import React from 'react'
import LoginForm, {LoginReduxForm} from "./LoginForm";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";




const Login=(props)=>{
    const onSubmit=(formData)=>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    return (<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)
}
export default connect(null,{login})(Login)