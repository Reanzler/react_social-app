import css from './Post.module.css'


const Post = (props) => {
    return (  
        <div className={css.item}>
           <a href={window.ZAGLUSHKA}>
                <img className={css.avatar} src={props.img}/>
                <div className={css.name}>{props.name} {props.secondName}</div>
            </a>
            <div className={css.message}>{props.message}</div>
            <div>
                <button>Like</button><span>{props.likesCount}</span>
                <button>Dislike</button><span>{props.DislikesCount}</span>
            </div>
        </div>
    )
}

export {Post}