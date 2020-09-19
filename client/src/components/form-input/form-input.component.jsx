import React from 'react'
import './form-input.styles.scss'

/*
export const FormInput = ({ label, handleChange, ...otherProps }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps} />
            {label ?
                (<label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>
                    {label}
                </label>)
                : null
            }
        </div>
    )
}
*/
///*

export const FormInput = (props) => {
    return (
        <div className="group">
            <input className="form-input" onChange={props.handleChange} type={props.type} name={props.name} value={props.value} required={props.required}/>
            {
                props.label ?
                    (
                        <label className={`${props.value ? "shrink" : ""} form-input-label`}>
                            {props.label}
                        </label>

                    ) :
                    null
            }
        </div>
    )
}
