import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './style.css';
//import ButtonLink from '../ButtonLink';
//import Button from '../Button';
import ButtonLink from '../ButtonLink';


function Menu() {
    return (
        <nav className="Menu">
        <a href="/">
            <img className="Logo" src={Logo} alt="ReactFlix" />
        </a>
        <ButtonLink className="ButtonLink" href="/">
            Novo vídeo
        </ButtonLink>
        </nav>
    );
}

export default Menu;