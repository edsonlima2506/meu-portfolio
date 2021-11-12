import React from 'react';
import './header.css';
import fotoPrincipal from '../images/fotoPrincipal.png';
import monitor from '../images/monitor.png';
import edsonLima from '../images/edsonLima.png';

class Header extends React.Component {
    render() {
        return(
            <header>
                <nav>
                    <img src={ edsonLima } alt="Nome Edson Lima" />
                    <ul className="superiorMenu">
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#academicEducation">Formação</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                        <li><button className="buttonContact">Contactar</button></li>
                    </ul>
                </nav>
                <div className="apresentation">
                    <span>
                        <img src={ monitor } alt=""  className="monitor"/>
                        <h2 className="helloMensage">Olá, meu nome é</h2>
                        <h1 className="myName">Edson Lima!</h1>
                    </span>
                    <img src={ fotoPrincipal } alt="Foto de Edson Lima"/>
                </div>
            </header>
        )
    }
}

export default Header;