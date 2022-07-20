import css from './Profile.module.css'

const Profile = (props) => {
    return(
        <div className={css.content}>
            <div>
                <img src='https://static.schools.by/images/header-bg/img-17.jpg'/>
            </div>
            <div>
            AVatar + Description
            </div>
            <div>
            My posts!
                <div>New Post!</div>
            </div>  
            <div className='posts'>
                <div className={css.item}>post1</div>
                <div className={css.item}>post2</div>
                <div className={css.item}>post3</div>
            </div>
      </div>
    )
}

export {Profile} 