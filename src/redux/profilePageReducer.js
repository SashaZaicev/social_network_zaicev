import {profileAPI, usersAPI} from "../api/api";

const ADD_MESSAGE = "SN/profilePageReducer/ADD_MESSAGE"
const UPDATE_NEW_MESSAGE = "SN/profilePageReducer/UPDATE_NEW_MESSAGE"
const SET_USER_PROFILE = "SN/profilePageReducer/SET_USER_PROFILE"
const SET_STATUS = 'SET_STATUS'

let initState = {
    messagesList: [
        {id: 0, message: 'Hello', likeCount: 15},
        {id: 1, message: 'Its my first post!', likeCount: 20},
        {id: 2, message: 'My best post!', likeCount: 100},
    ],
    newMessage: "Big Bunny",
    profile: null,
    status: '',
    friends: [
        {
            friendName: 'Ludviq',
            id: 1,
        },
        {
            friendName: 'Lohmach',
            id: 2,
        },
    ],
    personalInfo: [
        {
            id: 1,
            name: 'Alien',
            logoImg: 'https://pp.userapi.com/c625723/v625723916/3b852/-k0Gbq0-Dd0.jpg?ava=1',
            city: 'Portland',
            education: "sportsman",
            webSite: '',
            dateBirth: '25.12.85',
        }
    ],
}
let profilePageReducer = (_state = initState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newPost = {
                id: 3,
                message: action.newMessage,
                likeCount: 0,
            };
            // let copyState = {..._state};
            // copyState.messagesList = [newPost, ..._state.messagesList];
            // copyState.newMessage = '';
            // return copyState
            return {..._state, messagesList: [newPost, ..._state.messagesList]};
        case UPDATE_NEW_MESSAGE:
            return {..._state, newMessage: action.textPost}
        case SET_STATUS:
            return {..._state, status: action.status}
        case SET_USER_PROFILE:
            return {..._state, profile: action.profile}
        default:
            return _state;
    }
};
export const addCommentAC = (newMessage) => (
    {type: ADD_MESSAGE, newMessage: newMessage}
);
export const updatePostAC = (textPost) => (
    {type: UPDATE_NEW_MESSAGE, textPost: textPost}
);
export const setUserProfile = (profile) => (
    {type: SET_USER_PROFILE, profile: profile}
);
export const setStatus = (status) => (
    {type: SET_STATUS, status}
);
//Санка!!!!
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
    });
};
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then((response) => {
            dispatch(setStatus(response.data));
        });
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then((response) => {
        //debugger
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
};
export default profilePageReducer;