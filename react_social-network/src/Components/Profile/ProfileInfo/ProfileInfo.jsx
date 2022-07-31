import css from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return(
        <div>
            <div>
                <img className={css.imgBackground} src='https://static.schools.by/images/header-bg/img-17.jpg'/>
            </div>
            <div className={css.descriptionBlock}>
            AVatar + Description
            </div>
      </div>
    )
}

export {ProfileInfo} 