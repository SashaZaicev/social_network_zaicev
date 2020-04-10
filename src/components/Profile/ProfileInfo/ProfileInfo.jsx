import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import photoMan from '../../../img/images/logoMan.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, error}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }
    const foto = profile.photos.small != null
        ? profile.photos.small
        : photoMan;
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            });
    }
    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
                    alt='nature' className={s.imgBack}/>
            </div>
            <div className={s.description}>
                <div><img className={s.fotoProfile} src={foto} alt={'profile'}/>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                </div>
                {editMode ?
                    <ProfileDataForm
                        initialValues={profile}
                        onSubmit={onSubmit}
                        profile={profile}
                        error={error}
                    /> :
                    <ProfileData
                        goToEditMode={() => {
                            setEditMode(true)
                        }}
                        isOwner={isOwner}
                        profile={profile}
                    />}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>)
}
const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner &&
        <div>
            <button onClick={goToEditMode}> on edit</button>
        </div>
        }
        <div>
            <b>Full name: </b>{profile.fullName}
        </div>
        <div>
            <b>Looking for a job: </b>{profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills: </b>{profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me: </b>{profile.aboutMe}
        </div>
        <div>
            <b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
// export default ProfileInfo;