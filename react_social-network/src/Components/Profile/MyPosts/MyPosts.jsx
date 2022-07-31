import css from './MyPosts.module.css'
import { Post } from './Post/Post'

const MyPosts = (props) => {
    return(
    <div className={css.postBlock}>
        <h3>My posts!</h3>
        <div>
            <textarea placeholder='Добавь новый пост - бестолочь!'></textarea>
            <div>    
                <button>Add post</button>
                <button>Remove post</button>
            </div>
        </div>
        <div className={css.posts}>      
            <Post message='Hi, How are u ?'/>
            <Post message='It is my first post!)'/>
        </div>
    </div>
    )
}

export {MyPosts}