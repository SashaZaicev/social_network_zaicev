import React from 'react'
import styles from './FormsControls.module.css'

export let FormControl = ({input, child, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error + " Stupid user! :)"} </span>}
        </div>
    )
}
export let Textarea = (props) => {
    let {input, child, meta, restProps} = props
    return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
}
export let Input = (props) => {
    let {input, child, meta, restProps} = props
    return <FormControl {...props}><input {...input}{...restProps}/></FormControl>
}