const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY' //type's - типы для actionCreator и для dispatch 
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {

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