import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_MESSAGE = "SN/profilePageReducer/ADD_MESSAGE"
const UPDATE_NEW_MESSAGE = "SN/profilePageReducer/UPDATE_NEW_MESSAGE"
const SET_USER_PROFILE = "SN/profilePageReducer/SET_USER_PROFILE"
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

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
let profilePageReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newPost = {
                id: 3,
                message: action.newMessage,
                likeCount: 0,
            };
            // let copyState = {...state};
            // copyState.messagesList = [newPost, ...state.messagesList];
            // copyState.newMessage = '';
            // return copyState
            return {...state, messagesList: [newPost, ...state.messagesList]};
        case UPDATE_NEW_MESSAGE:
            return {...state, newMessage: action.textPost}
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SAVE_PHOTO_SUCCESS:
            debugger
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state;
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
export const savePhotoSuccess = (photos) => (
    {type: SAVE_PHOTO_SUCCESS, photos}
);
//Санка!!!!
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};
export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0]);
    }
};
export default profilePageReducer;