import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../miniRedux/State' //Испортируем actionCreator
import css from './MyPosts.module.css'
import { Post } from './Post/Post'
const MyPosts = (props) => {

    let postElements = props.postsData.map( data => <Post 
        secondName = {data.secondName}
        name={data.name}
        img={data.img}
        message={data.message}
        likesCount={data.likesCount}
        DislikesCount={data.DislikesCount}    
    />)

    let newPostElement = React.createRef(); //Создаем ссылку для взаимодействия кнопки с textarea
     /* Достаем введенный текст (текст был ранее получен из поля textarea *вспомни архитектуру Flux*)
    из _state и далее добавляем в textarea в атрибут value для отображения  */

    let addPost = () => {
        let text = newPostElement.current.value //Достаем из textarea текущее значение
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {  //Принимаем все изменения с textarea и отправляем на BLL 
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
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