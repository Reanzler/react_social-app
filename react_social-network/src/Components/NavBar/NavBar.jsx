import css from './NavBar.module.css'

const NavBar = (props) => {
    return(
        <nav className={css.nav}>
            <div className={css.item}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={css.item}>
                <a href='/dialogs'>Messages</a>
            </div>
            <div className={css.item}>
                <a href='/news'>News</a>
            </div>
            <div className={css.item}>
                <a href='/music'>Music</a>
            </div>
            <div className={css.item}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    )
}

export {NavBar}