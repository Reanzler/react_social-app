import css from './Header.module.css'
import React from 'react';

const Header = (props) => {
    return(
        <header className={css.header}>
            <a href={window.ZAGLUSHKA}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/DFB-Logo_1900.svg/500px-DFB-Logo_1900.svg.png' alt='Изображение не загрузилось, нет интернета!'/>
                <h1 className={css.titleText}>SOCIETY-2</h1>
            </a>
        </header>
    )
}

export {Header} 