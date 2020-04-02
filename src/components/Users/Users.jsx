import React from 'react';
import User from "./User";
import Paginator from "../Common/Paginator/Paginator";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount}
                   pageSize={pageSize}/>
        {
            props.users.map(user => <User key={user.id}
                                          user={user}
                                          followingInProgress={props.followingInProgress}
                                          follow={props.follow}
                                          unfollow={props.unfollow}
                />
            )}
    </div>
}

export default Users;