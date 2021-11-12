import React from 'react';
import '../components/projects.css';
import skills from '../data/skills';

class Projects extends React.Component {
    constructor() {
        super()

        this.renderSkills = this.renderSkills.bind(this)
    }

    renderSkills() {
        return skills.map((skill) => (
            <section className="skillCard">
                <img src={ skill.skillImage } alt="Icone da skill" className="skillImage"/>
                <h1 className="skillName">{ skill.skillName }</h1>
            </section>
        ))
    }

    render() {
        return (
            <div className="projects">
                <div className="skillsDivision">
                    { this.renderSkills() }
                </div>
            </div>
        )
    }
}

export default Projects;