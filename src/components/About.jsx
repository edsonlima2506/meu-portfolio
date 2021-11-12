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
                    <article>
                        <h3 className="greetings">Prazer, sou o Edson! <br /> Dev Front-End </h3>
                        <p className="bioApresentation">
                            Sou um programdor que busca sempre a excêlencia na resolução de problemas, <br /> 
                            entendendo sempre que a tecnologia é um meio para isso, e não um fim! <br />
                            Carrego comigo uma comunidade composta por mais de 2mil desenvolvedores <br />
                            e comando uma startup que já impactou mais de 10mil pessoas!
                        </p>
                    </article>
                </section>
            </div>
        )
    }
}

export default About;