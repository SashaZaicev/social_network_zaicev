import React from 'react';
import s from "./Users.module.css";
import photoMan from "../../img/images/logoMan.png";
import {NavLink} from "react-router-dom";
import Preloader from "../Common/Preloader";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                // debugger
                return <span className={props.currentPage === p && `${s.selectedPage}`}
                             onClick={() => props.onPageChanged(p)}>{p} </span>
            })}
        </div>
        {
            props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                             <NavLink to={'/profile/' + user.id}>
                            <img className={`${s.imgSize}`} src={user.photos.small != null ?
                                user.photos.small : photoMan} alt=''/>
                             </NavLink>
                        </div>
                    <div>
                        {user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          props.unfollow(user.id)
                                      }}>Unfollow</button>
                            : <button disabled={props.followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => {
                                          props.follow(user.id)
                                      }}>Follow</button>}
                    </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </span>
                    {/*<div> {user.status || status}</div>*/}
                </div>
            )}
    </div>
}
export default Users;