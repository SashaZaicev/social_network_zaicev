import React from 'react';
import s from './Images.module.css';
// import PropTypes from "prop-types";
// import {addCommentAC} from "../../redux/profilePageReducer";
import {addImageAC} from "../../redux/imagesPageReducer";
import { connect } from 'react-redux';

const Img = (props) => {
// let {startImgText,addImgUrl }= imagesPage
//     let img = (url)=>{
//         let actionObj = addImageAC(url);
//         //dispatch(actionObj);
//     }

    let url = React.createRef();
   //  let imgPage = startImgText;
   //  let images = null;
   //  if(!!addImgUrl){
        let images = props.addImgUrl.map((url) => <img src={url}/>)
// }
    return (<>
            <div className={s.imgBox}>{images}</div>
            <div>
                {/*<h3>{imgPage.title}</h3>*/}
                {/*<p className={s.p}>{imgPage.text}</p>*/}
            </div>
            <div>
                <input ref={url}/>
                <button onClick ={()=>{props.addImages(url.current.value)}}>
                    Add photo
                </button>
            </div>
        </>
    )


};

const mstp=(_state)=>{
    return {
        addImgUrl: _state.imagesPage.addImgUrl
    }
};
const mdtp=(dispatch)=>{
    return {
        addImages: (url) => dispatch(addImageAC(url))
    }
};
export default connect (mstp,mdtp) (Img);
// export default Img;