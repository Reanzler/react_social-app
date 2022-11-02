import css from './NavBar.module.css'
import {NavLink} from 'react-router-dom'
import React from 'react'

const NavBar = (props) => {
    return(
        <nav className={css.nav}>
            <div>
                <NavLink to='/profile' className={ (data) => {return data.isActive ? css.active: css.item} }>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={ data => data.isActive ? css.active: css.item }>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={ data => data.isActive ? css.active: css.item }>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={ data => data.isActive ? css.active: css.item }>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={ data => data.isActive ? css.active: css.item }>Settings</NavLink>
            </div>
        </nav>
    )
}

export {NavBar}