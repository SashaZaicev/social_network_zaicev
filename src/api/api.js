import React from 'react'
import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': "c8de3d63-d7d2-4fd1-8813-53b735280320"
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
    }
};

export const authAPI = {
    me() {
        return instance
            .get(`auth/me`)
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