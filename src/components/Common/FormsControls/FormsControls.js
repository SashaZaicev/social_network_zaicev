import React from 'react'
import styles from './FormsControls.module.css'
import {Field} from "redux-form";

export const FormControl = ({input, child, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error + " Stupid user! :)"} </span>}
        </div>
    )
};
export const Textarea = (props) => {
    let {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
};
export const Input = (props) => {
    let {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};
export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
    return <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
};