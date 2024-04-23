
import {NavLink} from 'react-router-dom'

const Menu = () => {
    return <>
         <header className="header">
            <img className="header__img" src="/logos/logo.svg" alt="Logo de Kasa" />
            <menu className="header__menu montserrat-font">
                <NavLink to={'/'} className="header__menu__item">Accueil</NavLink>
                <NavLink to='/a-propos' className="header__menu__item">A propos</NavLink>
            </menu>
        </header>
    </>
}

export default Menu