import css from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    
    let path = `/dialogs/${props.id}`

    return (
        <div className={css.dialog + " " + css.dialogActive}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>    
    )
}

export {DialogItem}