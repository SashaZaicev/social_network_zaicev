import React from 'react';
import s from './ProfileInfo.module.css';
// import {connect} from "react-redux";
import Preloader from "../../Common/Preloader";
import ProfileStatus from './ProfileStatus'
import photoMan from '../../../img/images/logoMan.png'

// const PersonalInfo = (props) => {
//     // let {messagesList,newMessage,friends,personalInfo} = profilePage;
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>City: {props.city}</p>
//             <p>Date of Birth: {props.dateBirth}</p>
//         </div>
//     )
// }


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    const foto = props.profile.photos.small != null
        ? props.profile.photos.small
        : photoMan;
return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
                    alt='nature' className={s.imgBack}/>
            </div>
            <div className={s.description}>
               <div><img className={s.fotoProfile} src={foto}/>
                   <div>{props.profile.fullName}</div>
                   <div>{props.profile.lookingForAJob}</div>
               </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>)
}

export default ProfileInfo;
// export default ProfileInfo;