import React from 'react';
import '../components/about.css';
import fotoSobre from '../images/fotoSobre.png';

class About extends React.Component {
    render() {
        return (
            <div className="about" id="about">
                <section className="resume">
                    <div className="resumeContent">
                        <h1>+2MIL</h1>
                        <h2>Pessoas impactadas</h2>
                    </div>
                    <hr />
                    <div className="resumeContent">
                        <h1>20</h1>
                        <h2>Projetos</h2>
                    </div>
                    <hr />
                    <div className="resumeContent">
                        <h1>CEO</h1>
                        <h2>Aos 18 anos</h2>
                    </div>
                </section>
                <section className="myBio">
                    <img src={ fotoSobre } alt="foto de Edson Lima"/>
                    <p>Prazer, sou o Edson!</p>
                </section>
            </div>
        )
    }
}

export default About;