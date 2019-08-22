import music1 from "../musics/2mashi.mp3";
import music2 from "../musics/artur.mp3";
import music3 from "../musics/tima.mp3";

let initState = {
        musicTrack: [
            {
                name: 'artur',
                path: music1,
            },
            {
                name: '2mashi',
                path: music2,
            },
            {
                name: 'timaa',
                path: music3,
            }
        ]
}

let musicReducer = (state= initState, action)=> {
    switch (action.type) {
        default:
            return state;

    }
}
export default musicReducer;