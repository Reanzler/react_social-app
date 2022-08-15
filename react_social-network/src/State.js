let state = {
    profilePage: {
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
            {id: 2, message: 'How are u, Baby?'},
            {id: 3, message: 'Я тут!'},
            {id: 3, message: 'Я тут!'},
            {id: 3, message: 'Я тут!'},
            {id: 3, message: 'Я тут!'},
            {id: 3, message: 'Я тут!'},
            {id: 3, message: 'Я тут!'}
        ],
    },
    dialogsPage: {
            postsData: [
                {id: 1, message: 'Hi, How are u ?', likesCount: 12, DislikesCount: 2},
                {id: 2, message: 'It is my first post!)', likesCount: 78, DislikesCount: 0},
                {id: 3, message: 'Я тут!'}
            ]
    },
    sidebar: {}
}

export {state}