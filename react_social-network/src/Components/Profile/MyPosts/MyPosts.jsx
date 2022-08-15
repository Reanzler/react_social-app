import React from 'react'
import css from './MyPosts.module.css'
import { Post } from './Post/Post'

const MyPosts = (props) => {

    // let postsData = [
    //     {id: 1, message: 'Hi, How are u ?', likesCount: 12, DislikesCount: 2},
    //     {id: 2, message: 'It is my first post!)', likesCount: 78, DislikesCount: 0},
    //     {id: 3, message: 'Я тут!'}
    // ]

    let postElements = props.postsData.map( data => <Post message={data.message} likesCount={data.likesCount} DislikesCount={data.DislikesCount}/>)

    let newPostElement = React.createRef(); //Создаем ссылку для взаимодействия кнопки с textarea

    let addPost = () => {
        let text = newPostElement.current.value //Достаем из textarea текущее значение
        alert(`Заглушка ${text}`)
    }

    return(
    <div className={css.postBlock}>
        <h3>My posts!</h3>
        <div>
            <textarea ref={newPostElement} placeholder='Добавь новый пост!'></textarea> {/*ref, newPostElement ссылка текстового поля*/}
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