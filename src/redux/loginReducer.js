import axios from "../dal/axios-instance";
const SET_STATUS = 'APP/LOGIN/SET_STATUS';
const SET_MESSAGE = 'APP/LOGIN/SET_MESSAGE';

export const statuses = {
    INIT: 'INIT',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    CAPTCHAREQUIRED: 'CAPTCHAREQUIRED',
    SUCCESS: 'SUCCESS'
}
let initialState = {
    status: statuses.INIT,
    message: '',
}

export const setStatus = (status) => ({
type: SET_STATUS, status
})
export const setMessage = (message) => ({
type: SET_MESSAGE, message
})

export const login = (login, password, rememberMe) => (d) => {
    d(setStatus(statuses.INPROGRESS))
    axios.post('auth/login', {
        email: login,
        password: password,
        rememberMe: rememberMe,
    }).then((res) => {
        if (res.data.resultCode === 0) {
           d( setStatus(statuses.SUCCESS))
            alert('Мы залогинились')
        } else {
            d(setStatus(statuses.ERROR));
            d(setMessage(res.data.messages[0]))
        }
        // debugger
    })
}

const LoginReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case SET_STATUS: {
    return {
        ...state,
        status: action.status
    }
        }
        case SET_MESSAGE: {
    return {
        ...state,
        status: action.message
    }
        }
        default: {
            return state
        }
    }
}
export default LoginReducer