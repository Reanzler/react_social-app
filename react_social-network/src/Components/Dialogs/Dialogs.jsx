import React from 'react'
import css from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Messages/Message'
import { sendMessageActionCreator, updateNewMessageBodyActionCreator} from './../../miniRedux/State'


const Dialogs = (props) => {

    let dialogElements = props.dialogs.map( data => <DialogItem name={data.name} id={data.id}/> )
    let messageElements = props.messages.map( data => <Message message={data.message} />)
    let newMessageBody = props.newMessageBody //Достаем из store и вкладываем в textarea

    // let refNewElement = React.createRef()

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let onBNewMessageChange = (event) => {
// let body = refNewElement.current.value - Достем значение value из textarea
        let body = event.target.value
/*Достаём значение value тега textarea, когда вызывается компонента <textarea /> 
то он автоматиески кладёт в функцию onBNewMessageChange() аргумент event получается так: onBNewMessageChange(event)*/
        props.dispatch(updateNewMessageBodyActionCreator(body))
    }


    return (
        <div className={css.dialogs}>
            <div className={css.dialogs_items}>{ dialogElements }</div>
            <div className={css.messages_items}>{ messageElements }</div>
            <div>
                <textarea /*ref={refNewElement}*/ value={newMessageBody} placeholder='Enter your message: ' onChange={onBNewMessageChange}/>
                <input type='button' value='Send' onClick={onSendMessageClick}/>
            </div>
        </div>
    )
}

export { Dialogs };
