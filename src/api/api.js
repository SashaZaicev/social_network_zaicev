import React from 'react'
import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: {
        'API-KEY': "cd8f6163-cf08-478b-93cd-177a66dc07b2"
    },
});
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance
            .post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance
            .delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. please profileAPI object.')
        return profileAPI.getProfile(userId);
    }
};
export const profileAPI = {
    getProfile(userId) {
        return instance
            .get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    updatePhoto(photo) {
        return instance.put(`profile/photo`, {photo: photo});
    }
};

export const authAPI = {
    me() {
        return instance
            .get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance
            .post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance
            .delete(`auth/login`)
    }
}
// const getUsers = (currentPage, pageSize) => {
//     return axios
//         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
//             {
//                 withCredentials: true,
//             })
//         .then(response => {
//             return response.data
//         })
// }
// export default getUsers