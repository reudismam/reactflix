import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './style.css';
//import ButtonLink from '../ButtonLink';
//import Button from '../Button';
import ButtonLink from '../ButtonLink';
import {Link} from 'react-router-dom';


function Menu() {
    return (
        <nav className="Menu">
        <Link to="/">
            <img className="Logo" src={Logo} alt="ReactFlix" />
        </Link>
        <ButtonLink className="ButtonLink" href="/cadastro/video">
            Novo vídeo
        </ButtonLink>
        </nav>
    );
}

export default Menu;