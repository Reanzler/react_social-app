import css from './NavBar.module.css'

const NavBar = (props) => {
    return(
        <nav className={css.nav}>
            <div className={css.item}>
                <a href='#1'>Profile</a>
            </div>
            <div className={css.item}>
                <a href='#2'>Messages</a>
            </div>
            <div className={css.item}>
                <a href='#3'>News</a>
            </div>
            <div className={css.item}>
                <a href='#4'>Music</a>
            </div>
            <div className={css.item}>
                <a href='#5'>Settings</a>
            </div>
        </nav>
    )
}

export {NavBar}