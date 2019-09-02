import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import sideBarReducer from "./redux/sideBarReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import usersPageReducer from "./redux/usersPageReducer";
import dialogPageReducer from "./redux/dialogPageReducer";
import profilePageReducer from "./redux/profilePageReducer";
import musicReducer from "./redux/musicReducer";
import imagesPageReducer from "./redux/imagesPageReducer";
import authReducer from "./redux/auth-reducer";
import loginReducer from "./redux/loginReducer";
import thunk from "redux-thunk";
<<<<<<< HEAD
import { reducer as formReducer } from 'redux-form';
=======
>>>>>>> e91ac68bd2d2a53d9e6e6c5aed414e5f5316a5d5

let reducers = combineReducers({
    dialogPage: dialogPageReducer,
    profilePage: profilePageReducer,
    music: musicReducer,
    sideBar: sideBarReducer,
    imagesPage: imagesPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    login: loginReducer,
<<<<<<< HEAD
    form: formReducer,
});
=======
})
>>>>>>> e91ac68bd2d2a53d9e6e6c5aed414e5f5316a5d5

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
