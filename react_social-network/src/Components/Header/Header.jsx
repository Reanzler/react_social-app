import css from './Header.module.css'

const Header = (props) => {
    return(
        <header className={css.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/DFB-Logo_1900.svg/500px-DFB-Logo_1900.svg.png'/>
            SOCIETY-2
        </header>
    )
}

export {Header} 