// const ADD_MESSAGE = "SN/profilePageReducer/ADD_MESSAGE"
import logo from "../img/logo.png";

let initState = {
    friends: [
        {
            id: 1,
            logo: logo,
            name: 'Yasha',
        },
        {
            id: 2,
            logo: logo,
            name: 'Kenuri',
        },
        {
            id: 3,
            logo: logo,
            name: 'Iokahiri',
        },
    ]
}

let sideBarReducer = (_state = initState, action) => {
    switch (action.type) {
        default:
            return _state;

    }
}
export default sideBarReducer;