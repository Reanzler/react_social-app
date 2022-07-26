import css from './Post.module.css'

const Post = (props) => {
    return (  
        <div className={css.item}>
            <img src='https://proprikol.ru/wp-content/uploads/2019/06/krasivye-kartinki-na-avu-3.jpg'/>
            <div>Name Secondname</div>
            {props.message}
            <div>
                <button>Like</button>
                <button>Dislike</button>
            </div>
        </div>
    )
}

export {Post} 