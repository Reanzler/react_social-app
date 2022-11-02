const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY' //type's - типы для actionCreator и для dispatch 
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: 'Barbara' },
        { id: 2, name: 'Vera'},
        { id: 3, name: 'Guly' },
        { id: 4, name: 'Ivan' },
        { id: 5, name: 'Sasha' },
        { id: 6, name: 'Marat' },
    ],
    messages: [
        {id: 1, message: 'Hi, buddy!'},
        {id: 1, message: 'Hi, buddy!'},
        {id: 1, message: 'Hi, buddy!'},
        {id: 2, message: 'How are u, Baby?'},
        {id: 3, message: 'Я тут!'},
        {id: 3, message: 'Я тут!'},
        {id: 3, message: 'Я тут!'},
    ],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            break
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.messages.push({id: 3, message: body})
            state.newMessageBody = ''
            break
        default:
            return state
    }
    
    return state
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyActionCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export {dialogsReducer}