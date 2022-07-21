import css from './MyPosts.module.css'
import { Post } from './Post/Post'

const MyPosts = (props) => {
    return(
    <div>
        My posts!
        <div>
            <textarea placeholder='Добавь новый пост - бестолочь!'></textarea>
            <button>Add post</button>
            <button>Remove post</button>
        </div>
        <div className={css.posts}>      
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
    )
}

export {MyPosts} 