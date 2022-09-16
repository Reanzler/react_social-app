import React from 'react'
import css from './MyPosts.module.css'
import { Post } from './Post/Post'
const MyPosts = (props) => {
    
    let postElements = props.postsData.map( data => <Post message={data.message} likesCount={data.likesCount} DislikesCount={data.DislikesCount}/>)

    let newPostElement = React.createRef(); //Создаем ссылку для взаимодействия кнопки с textarea

    let addPost = () => {
        let text = newPostElement.current.value //Достаем из textarea текущее значение
        props.dispatch({type: 'ADD-POST'})
    }

    let onPostChange = () => {  //Принимаем все изменения с textarea и отправляем на BLL 
        let text = newPostElement.current.value
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
    }

    return(
    <div className={css.postBlock}>
        <h3>My posts!</h3>
        <div>
            <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement} placeholder='Добавь новый пост!' /> {/*ref, newPostElement ссылка текстового поля*/}
            <div>    
                <button onClick={ addPost }>Add post</button>
                <button>Remove post</button>
            </div>
        </div>
        <div className={css.posts}>      
            { postElements }
        </div>
    </div>
    )
}

export {MyPosts}