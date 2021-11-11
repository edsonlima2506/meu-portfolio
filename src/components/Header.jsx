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
                <div className="apresentation">
                    <h2 className="helloMensage">Olá, meu nome é</h2>
                    <h1 className="myName">Edson Lima!</h1>
                    <h3 className="devFrontEnd">Dev Front-End</h3>
                </div>
            </header>
        )
    }
}

export default Header;