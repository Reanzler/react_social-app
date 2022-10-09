const ADD_POST ='ADD-POST' //type's - типы для actionCreator и для dispatch 
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
    
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