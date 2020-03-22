import profileReducer, {addCommentAC} from './profilePageReducer';
import React from 'react';

let _state =
    {
        messagesList: [
            {id: 0, message: 'Hello', likeCount: 15},
            {id: 1, message: 'Its my first post!', likeCount: 20},
            {id: 2, message: 'My best post!', likeCount: 100},
        ]
    }

it('new post should be increment', () => {
//1. test data
    let action = addCommentAC('hello bunny boy');

//2. action
    let newState = profileReducer(_state, action);
//3. expectation
    expect(newState.messagesList.length).toBe(4)
});

it('message of new post should be correct', () => {
//1. test data
    let action = addCommentAC('hello bunny boy');

//2. action
    let newState = profileReducer(_state, action);
//3. expectation
    expect(newState.messagesList[3].message).toBe('My best post!')
});

