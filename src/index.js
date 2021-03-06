import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import sideBarReducer from "./redux/sideBarReducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import usersPageReducer from "./redux/usersPageReducer";
import dialogPageReducer from "./redux/dialogPageReducer";
import profilePageReducer from "./redux/profilePageReducer";
import musicReducer from "./redux/musicReducer";
import imagesPageReducer from "./redux/imagesPageReducer";
import authReducer from "./redux/auth-reducer";
import loginReducer from "./redux/loginReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./redux/app-reducer";

let reducers = combineReducers({
    dialogPage: dialogPageReducer,
    profilePage: profilePageReducer,
    music: musicReducer,
    sideBar: sideBarReducer,
    imagesPage: imagesPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    login: loginReducer,
    form: formReducer,
    app: appReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)
));
// let store = createStore(reducers, applyMiddleware(thunk));
window.__store__ = store;
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
