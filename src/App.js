import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router";
// import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import Images from "./components/Images/Images";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
                <Route path='/images' render={() => <Images/>}/>
                <Route path='/users' render={()=><UsersContainer/>}/>
                <Route path='/login' render={()=><Login/>}/>
            </div>
        </div>
    );
}

export default App;
