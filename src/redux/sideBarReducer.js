// const ADD_MESSAGE = "SN/profilePageReducer/ADD_MESSAGE"
import logo from "../img/logo.png";

let initState = {
        friends: [
            {
                logo: logo,
                name: 'Yasha',
            },
            {
                logo: logo,
                name: 'Kenuri',
            },
            {
                logo: logo,
                name: 'Iokahiri',
            },
        ]
}

let sideBarReducer = (_state = initState, action)=> {
    switch (action.type) {
        default:
            return _state;

    }
}
export default sideBarReducer;