import {usersAPI} from "../api/api";
import keys from "redux-form/lib/structure/immutable/keys";
import {updateObjectInArray} from "../utils/object-helpers";


const SET_USER = "SN/USERSPAGE/SET_USERS";
const SET_CURRENT_PAGE = "SN/USERSPAGE/SET_CURRENT_PAGE";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT;';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

export const setUsers = users => ({
    type: SET_USER, users: users
});
const usersReducer = (_state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ..._state,
                users: updateObjectInArray(_state.users, action.userID, "id", {followed: true})
                //             _state.users.map(u => {
                //     if (u.id === action.userID) {
                //         return {...u, followed: true};
                //     }
                //     return u;
                // })
            }
        case UNFOLLOW:
            return {
                ..._state,
                users: updateObjectInArray(_state.users, action.userID, "id", {followed: false})
                //
                // users: _state.users.map(u => {
                //     if (u.id === action.userID) {
                //         return {...u, followed: false};
                //     }
                //     return u;
                // })
            }
        case SET_USER:
            return {..._state, users: action.users}
        case SET_CURRENT_PAGE:
            return {..._state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {..._state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {..._state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ..._state,
                followingInProgress: action.isFetching
                    ? [..._state.followingInProgress, action.userID]
                    : [..._state.followingInProgress.filter(id => id != action.userID)]
            }
        default:
            return _state;

    }
}
export const followSuccess = (userID) => ({
    type: FOLLOW, userID: userID
});
export const unfollowSuccess = (userID) => ({
    type: UNFOLLOW, userID: userID
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage: currentPage
});
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
});
export const toggleFollowingProgress = (isFetching, userID) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID
});
export const getUsersThunkCreator = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(setCurrentPage(page));
    }
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}
export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}
export default usersReducer;