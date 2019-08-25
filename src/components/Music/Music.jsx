import React from 'react';
import s from './Music.module.css';
// import music from "../../musics/2mashi.mp3";
import ReactAudioPlayer from 'react-audio-player';
import {connect} from "react-redux";

const MusicTrack = (props) => {
    return (
        <div>
            {/*<p className={s.p}>{props.name}</p>*/}
            {/*<audio controls src={props.path}></audio>*/}
            <ReactAudioPlayer
                src={props.path}
                // autoPlay
                controls
            />
        </div>
    )
}
const Music = (props) => {
// let {musicTrack} = music
    let musicTracks = props.music.musicTrack.map((el) => <MusicTrack key={el.id} name={el.name} path={el.path}/>
    );
    return (
        <div>
            <p className={s.p}>My favorite music</p>
            {/*<audio controls src={music}></audio>*/}
            {musicTracks}
        </div>)
}
const mstp = (state) => ({
    music: state.music
})

export default connect(mstp)(Music);
// export default Music;