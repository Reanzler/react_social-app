import { MyPosts } from './MyPosts/MyPosts'
import css from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return(
        <div className={css.content}>
            <ProfileInfo />
            <MyPosts 
                postsData={props.profilePage.postsData}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
      </div>
    )
}

export {Profile} 