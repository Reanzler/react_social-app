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
                        {id: 3, message: 'Я тут!'}
                    ],
            },
            profilePage: {
                    postsData: [
                        {id: 1, message: 'Hi, How are u ?', likesCount: 12, DislikesCount: 2},
                        {id: 2, message: 'It is my first post!)', likesCount: 78, DislikesCount: 0},
                        {id: 3, message: 'Я тут!'}
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
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
                DislikesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        }
        else if(action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state);
        }
    }
}

export {store}
window.store = store