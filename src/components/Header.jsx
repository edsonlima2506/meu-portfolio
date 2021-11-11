import React from 'react'
import './header.css'

class Header extends React.Component {
    render() {
        return(
            <header>
                <nav>
                    <ul className="superiorMenu">
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#academicEducation">Formação</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
                <h1 className="myName">Olá, meu nome é Edson!</h1>
            </header>
        )
    }
}

export default Header;