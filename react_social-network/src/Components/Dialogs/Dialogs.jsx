import css from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Messages/Message'

const Dialogs = (props) => {

    let dialogElements = props.dialogs.map( data => <DialogItem name={data.name} id={data.id}/> )
    let messageElements = props.messages.map( data => <Message message={data.message} />)

    return (
        <div className={css.dialogs}>
            <div className={css.dialogs_items}>
                { dialogElements }
            </div>
            <div className={css.messages_items}>
                { messageElements }
            </div>
        </div>
    )
}

export { Dialogs };
