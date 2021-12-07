import React from 'react'
import '../../Styles/Skills.scss'

function Skills() {
    return (
        <div className="skills-containeer">
            <div className="block block-name">
                <h1>Skills</h1>
            </div>
            <div className="block block-list-skills">
                <div className="block-column">
                    <div className="skill"><a target="_blanc" href="https://uk.wikipedia.org/wiki/HTML">HTML</a></div>
                    <div className="skill"><a target="_blanc" href="https://uk.wikipedia.org/wiki/CSS">CSS</a></div>
                    <div className="skill"><a target="_blanc" href="https://uk.wikipedia.org/wiki/JavaScript">JavaScript</a></div>
                    <div className="skill"><a target="_blanc" href="https://uk.wikipedia.org/wiki/JQuery">jQuery</a></div>
                </div>
                <div className="block-column">
                    <div className="skill"><a target="_blanc" href="https://uk.wikipedia.org/wiki/React">React JS</a></div>
                    <div className="skill"><a target="_blanc" href="https://uk.wikipedia.org/wiki/ASP.NET">ASP.NET</a></div>
                    <div className="skill"><a target="_blanc" href="https://uk.wikipedia.org/wiki/.NET_Framework">.NET</a></div>
                    <div className="skill"><a target="_blanc" href="https://uk.wikipedia.org/wiki/Windows_Forms">WinForms</a></div>
                </div>
                <div className="block-column">
                    <div className="skill"><a target="_blanc" href="https://uk.wikipedia.org/wiki/Windows_Presentation_Foundation">WPF</a></div>
                    <div className="skill"><a target="_blanc" href="https://uk.wikipedia.org/wiki/Microsoft_SQL_Server">MS SQL</a></div>
                    <div className="skill"><a target="_blanc" href="https://uk.wikipedia.org/wiki/Entity_Framework">Entity Framework</a></div>
                    <div className="skill"><a target="_blanc" href="https://uk.wikipedia.org/wiki/Internet_Protocol">Protocols</a></div>
                </div>
                <div className="block-column">
                    <div className="skill"><a target="_blanc" href="https://uk.wikipedia.org/wiki/Shopify">Shopify</a></div>
                    <div className="skill"><a target="_blanc" href="https://uk.wikipedia.org/wiki/WordPress">WordPress</a></div>
                    <div className="skill"><a target="_blanc" href="https://uk.wikipedia.org/wiki/Figma">Figma</a></div>
                    <div className="skill"><a target="_blanc" href="https://uk.wikipedia.org/wiki/Adobe_Photoshop">Photoshop</a></div>
                </div>
            </div>
        </div>
    )
}

export default Skills
