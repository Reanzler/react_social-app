import { MyPosts } from './MyPosts/MyPosts'
import css from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import React from 'react'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'

const Profile = (props) => {
    return(
        <div className={css.content}>
            <ProfileInfo />
            <MyPostsContainer 
                postsData={props.profilePage.postsData}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
                store={props.store}
            />
      </div>
    )
}

export {Profile} 