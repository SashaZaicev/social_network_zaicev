const ADD_IMAGE = "SN/imagesPageReducer/ADD_IMAGE"
let initState = {
        startImgText: {
            title: "Image for me!!!",
            text: "Download image",
        },
        addImgUrl: ['https://ribalych.ru/wp-content/uploads/2017/05/prikoly_000-17.jpg',
            'https://ribalych.ru/wp-content/uploads/2017/05/prikoly_000-17.jpg',
        ],
}

let imagesPageReducer = (_state = initState, action) => {


    switch (action.type) {

        case ADD_IMAGE:
           return  {..._state,
                    addImgUrl:[..._state.addImgUrl,action.addImgUrl]};

        default:
            return _state;
    }
};

export const addImageAC = (url) => (
    { type: ADD_IMAGE, addImgUrl: url }
);
export default imagesPageReducer;