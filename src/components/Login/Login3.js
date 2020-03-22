import React from 'react';
import {connect} from "react-redux";
import {login, statuses} from "../../redux/loginReducer";

const Login2 = ({status, login, message}) => {

    let loginRef = React.createRef();
    let passwordRef = React.createRef();
    let rememberMeRef = React.createRef();

    const onLoginClick = () => {
        login && login(loginRef.current.value, passwordRef.current.value,
            rememberMeRef.current.checked)
    }
    let errorMessageBlock = status === statuses.ERROR &&
        <div className='error'>{message}</div>

    return <div>
        <div><input ref={loginRef} type="text" defaultValue='sasha.zaitsau@gmail.com'/></div>
        <div><input ref={passwordRef} type="password" defaultValue='167289'/></div>
        <div><input ref={rememberMeRef} type="checkbox"/></div>
        <div>
            <button disabled={status === statuses.INPROGRESS} onClick={onLoginClick}>Login</button>
        </div>
        {errorMessageBlock}
    </div>
}
let mstp = (state) => ({
    // isAuth: state.auth.isAuth,
    status: state.login.status,
    message: state.login.message,
    captchaUrl: state.login.captchaUrl,
})
let mdtp = (dispatch) => ({
    login: (log, password, rememberMe) => {
        dispatch(login(login, password, rememberMe))
    },
})


export default connect(mstp, mdtp)(Login2);