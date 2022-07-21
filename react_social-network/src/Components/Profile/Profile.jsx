import { MyPosts } from './MyPosts/MyPosts'
import css from './Profile.module.css'

const Profile = (props) => {
    return(
        <div className={css.content}>
            <div>
                <img className={css.imgBackground} src='https://static.schools.by/images/header-bg/img-17.jpg'/>
            </div>
            <div>
            AVatar + Description
            </div>
            <MyPosts />
      </div>
    )
}

export {Profile} 