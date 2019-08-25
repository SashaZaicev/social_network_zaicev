import React from 'react';
import s from './Friends.module.css';
import {connect} from "react-redux";

const Friend = (props) => {
    return (
        <div><p className={s.p}>{props.friendName}</p></div>)
}

const Friends =(props)=>{
   // debugger;
    // let {friends} = props.friends.friendsName
    let friendItem = props.friends.map((m)=><Friend friendName={m.friendName}/>)
   /* Тянем из props массив, с помощью метода map, перебираем его*/
    return (
        <div>
            {/*<p className={s.p}>Hello, my friend!</p>*/}
            {friendItem}
        </div>
    )
}

const mstp = (state) => ({
    friends: state.profilePage.friends
})

export default connect(mstp) (Friends);
// export default Friends;