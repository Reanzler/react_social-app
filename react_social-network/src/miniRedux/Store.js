import { dialogsReducer } from "./dialogsReducer"
import { profileReducer } from "./profileReducer"
import { sidebarReducer } from "./sidebarReducer"

// const ADD_POST ='ADD-POST' //type's - типы для actionCreator и для dispatch 
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
// const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
        _state: {
            dialogsPage: {
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
            },
            profilePage: {
                    postsData: [
                        {id: 1, secondName: 'Hristoforov', name: 'Ivan', message: 'Hi, How are u ?', likesCount: 12, DislikesCount: 2, img: 'https://i.yapx.ru/Ra8I0.jpg'},
                        {id: 2, secondName: 'Antipina', name: 'Sasha', message: 'It is my first post!)', likesCount: 78, DislikesCount: 0, img: 'https://userologia.ru/wp-content/uploads/images/avatarki-dlya-tik-toka-.jpg'},
                        {id: 3, secondName: 'Tatarinov', name: 'Marat', message: 'Я тут!', img: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'}
                    ],
                    newPostText: ''
            },
            sidebar: {},
    },

    getState() { return this._state; },

    _callSubscriber() { console.log('test') },

    subscribe(observer) { // Observer - наблюдатель, паттерн
        this._callSubscriber = observer
    },

    dispatch(action) {   //action - это объект, который указвает какое действие необходимо совершить { type : 'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}

export {store}
window.store = store