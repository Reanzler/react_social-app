import css from './NavBar.module.css'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return(
        <nav className={css.nav}>
            <div className={css.item}>
                <Link to='/profile'>Profile</Link>
            </div>
            <div className={css.item}>
                <Link to='/dialogs'>Messages</Link>
            </div>
            <div className={css.item}>
                <Link to='/news'>News</Link>
            </div>
            <div className={css.item}>
                <Link to='/music'>Music</Link>
            </div>
            <div className={css.item}>
                <Link to='/settings'>Settings</Link>
            </div>
        </nav>
    )
}

export {NavBar}