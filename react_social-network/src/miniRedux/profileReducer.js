const ADD_POST ='ADD-POST' //type's - типы для actionCreator и для dispatch 
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
        postsData: [
            {id: 1, secondName: 'Hristoforov', name: 'Ivan', message: 'Hi, How are u ?', likesCount: 12, DislikesCount: 2, img: 'https://i.yapx.ru/Ra8I0.jpg'},
            {id: 2, secondName: 'Antipina', name: 'Sasha', message: 'It is my first post!)', likesCount: 78, DislikesCount: 0, img: 'https://userologia.ru/wp-content/uploads/images/avatarki-dlya-tik-toka-.jpg'},
            {id: 3, secondName: 'Tatarinov', name: 'Marat', message: 'Я тут!', img: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'}
        ],
        newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
                DislikesCount: 0,
                img: window.ZAGLUSHKA_2, //Картинка заглушка
                name: 'Ravil',
                secondName: 'Migranov'
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            break
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break
        default:
            return state
    }

    return state
}

export const addPostActionCreator = () => {      
    /*
    Для устранения человеческого фактора, был создал actionCreator, чтобы можно 
    было спокойно в dispatch отправлять нужные типы данных, далее грузим эти функции туда где есть dispatch
    */
                return { type: ADD_POST }
            }
        
    export const updateNewPostTextActionCreator = (text) => {
                return {
                    type: UPDATE_NEW_POST_TEXT,
                    newText: text
                }
            }

export {profileReducer}