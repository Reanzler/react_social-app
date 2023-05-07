import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../miniRedux/profileReducer' //Испортируем actionCreator
import { MyPosts } from './MyPosts'

const MyPostsContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {  //Принимаем все изменения с textarea и отправляем на BLL 
/*Достаем введенный текст (текст был ранее получен из поля textarea *вспомни архитектуру Flux*)
из _state и далее добавляем в textarea в атрибут value для отображения*/

        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return( <MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={props.postsData}/> )
}

export {MyPostsContainer}