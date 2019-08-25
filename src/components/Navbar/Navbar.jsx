import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const SideBar = (props) => {
    return (
        <div className={`${s.sideBarBlock}`}>
            <img src={props.logo}></img>
            {props.name}
        </div>
    )
}

const Navbar = ({sideBar}) => {
    // debugger;
    let sideBars = sideBar.friends.map((el) => <SideBar key={el.id} name={el.name} logo={el.logo}/>)

    return <nav className={`${s.nav}`}>
        <div className={`${s.item}`}>
            <NavLink to='/profile' activeClassName={`${s.activeLink}`}>Profile</NavLink>
        </div>
        <div className={`${s.item}`}>
            <NavLink to='/images' activeClassName={`${s.activeLink}`}>Images</NavLink>
        </div>
        <div className={`${s.item}`}>
            <NavLink to='/dialogs' activeClassName={`${s.activeLink}`}>Messages</NavLink>
        </div>
        <div className={`${s.item}`}>
            <NavLink to='/news' activeClassName={`${s.activeLink}`}>News</NavLink>
        </div>
        <div className={`${s.item}`}>
            <NavLink to='/music' activeClassName={`${s.activeLink}`}>Music</NavLink>
        </div>
        <div className={`${s.item}`}>
            <NavLink to='/settings' activeClassName={`${s.activeLink}`}>Settings</NavLink>
        </div>
        <div className={`${s.item}`}>
            <NavLink to='/users' activeClassName={`${s.activeLink}`} className={`${s.users}`}>Users</NavLink>
        </div>

        <div className={`${s.item} ${s.friendsBlock}`}>
            <NavLink to='/friends' activeClassName={`${s.activeLink}`} className={`${s.friends}`}>Friends</NavLink>
            <div className={`${s.sidesBar}`}>{sideBars}</div>
        </div>

    </nav>
}

const sideBar = (state) => ({
    sideBar: state.sideBar
});

export default connect(sideBar)(Navbar);
// export default Navbar;