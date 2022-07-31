import css from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogs_items}>
                <DialogItem name='Barbara' id='1'/>
                <DialogItem name='Vera' id='2'/>
                <DialogItem name='Guly' id='3'/>
                <DialogItem name='Ivan' id='4'/>
                <DialogItem name='Sasha' id='5'/>
                <DialogItem name='Marat' id='6'/>
            </div>
            <div className={css.messages_items}>
                <Message message="Hi, buddy!" />
                <Message message="How are u, Baby?" />
                <Message message="Я тут!" />
            </div>
        </div>
    )
}

export { Dialogs };


const DialogItem = (props) => {
    
    let path = `/dialogs/${props.id}`

    return (
        <div className={css.dialog + " " + css.dialogActive}>
            <NavLink to={path}>Barbara</NavLink>
        </div>    
    )
}

const Message = (props) => {
    return (
        <div className={css.message}>
            {props.message}
        </div>
    )
}