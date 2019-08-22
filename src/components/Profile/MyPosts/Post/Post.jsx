import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (

    <div className={s.item}>
      <img src="https://skajnet.ru/wp-content/uploads/2018/07/avatarka-prikolnaya.jpg" alt="" />
      {props.message}
      <div>
        
        <span>Like</span>
        { props.likeCount}
      </div>
    </div>

  )
}

export default Post;