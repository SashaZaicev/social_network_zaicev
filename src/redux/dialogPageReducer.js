import logoAvatar2 from "../img/2.png";
import logoAvatar from "../img/1.png";
import logoAvatar3 from "../img/3.png";

let ADD_COMMENT = "SN/dialogPageReducer/ADD_COMMENT";
let UPDATE_NEW_COMMENT = "SN/dialogPageReducer/UPDATE_NEW_COMMENT";

let initState = {
    dialogsData: [
        {logo: logoAvatar2, name: 'Alexander', id: 1},
        {logo: logoAvatar2, name: 'Monika', id: 2},
        {logo: logoAvatar, name: 'Julia', id: 3},
        {logo: logoAvatar3, name: 'Many', id: 4},
        {logo: logoAvatar3, name: 'Fox', id: 5}
    ],
    messagesData: [
        {id: 0, name: 'Hello'},
        {id: 1, name: 'How are you?'},
        {
            id: 2, name: 'Im fine!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ' +
                'aliquam animi consectetur, dolorem ea eos error eum illum ipsum iste, laborum magnam, modi' +
                'necessitatibus perspiciatis possimus recusandae rem tempora veniam?'
        },
    ],
    // newComment: "",
}

let dialogPageReducer = (_state = initState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            // if (_state.dialogPage.newComment.trim()) {
            let newMsg = {
                id: 5,
                name: action.newComment,
            }
            /*Подробно
            let copyState = {..._state};
            copyState.messagesData = [newMsg, ..._state.messagesData];
            copyState.newComment = '';
            return copyState;*/
            return {..._state,  messagesData: [newMsg, ..._state.messagesData]};
        case UPDATE_NEW_COMMENT:
            return {..._state, newComment: action.text}
        default:
            return _state;
    }
}

export const addMessageAC = (newComment) => (
    {type: ADD_COMMENT, newComment: newComment}
);
export const updateCommentAC = (text) => (
{type: UPDATE_NEW_COMMENT, text: text}
)
export default dialogPageReducer;