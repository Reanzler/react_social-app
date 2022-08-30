let rerenderEntireTree = () => {console.log('test')}

let state = {
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
}


export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
        DislikesCount: 0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}

export const subscribe = (observer) => { // Observer - наблюдатель, паттерн
    rerenderEntireTree = observer
}

export {state}