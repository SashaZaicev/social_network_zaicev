import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress, getUsersThunkCreator,
} from '../../redux/usersPageReducer';
import Users from './Users';
import Preloader from "../Common/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
       this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    };

    render() {
        // debugger
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   // toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress = {this.props.followingInProgress}
            />
        </>
    }
}

const mstp = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,


})
/*const mdtp = (dispatch) => ({
    setUsers: (users) => dispatch(setUsersAC(users)),
    follow: (userID) => dispatch(followAC(userID)),
    unfollow: (userID) => dispatch(unfollowAC(userID)),
    setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
    setTotalUserCount: (totalCount) => dispatch(setUsersTotalCountAC(totalCount)),
    toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),

});*/
// let withRedirect = withAuthRedirect(UsersContainer)

// export default withAuthRedirect(connect(mstp, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     toggleFollowingProgress,
//     getUsersThunkCreator,
// })(UsersContainer))
export default compose(withAuthRedirect,
    connect(mstp, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsersThunkCreator,
}))(UsersContainer);