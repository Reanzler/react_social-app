import css from './../Dialogs.module.css'
import React from 'react'

const Message = (props) => {
    return (
        <div className={css.message}>
            {props.message}
        </div>
    )
}

export {Message}