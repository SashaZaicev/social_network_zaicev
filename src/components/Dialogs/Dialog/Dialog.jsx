import React from 'react';
import s from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div>
            <div>
                <img className={s.avatar} src="https://cs.pikabu.ru/images/big_size_comm/2013-01_6/13595614806621.jpg"
                     alt="smile"/>
                <p>User Name</p>
                <p className={s.windowBorder}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus alias.
                </p>
            </div>
        </div>
    )
}

export default Dialog;