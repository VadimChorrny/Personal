import React from "react";
import "../../Styles/Skills.scss";
import axios from "axios";

export default class Skills extends React.Component {
    state = {
        skills: [],
    };
    componentDidMount() {
        axios
            .get(`http://www.portfolio-vadym.somee.com/api/skill`)
            .then((res) => {
                const skills = res.data;
                this.setState({ skills });
            });
    }
    render() {
        return (
            <div className="skills-containeer">
                <div className="block block-name">
                    <h1>Skills</h1>
                </div>
                <div className="block block-list-skills">
                    <div className="block-column">
                        {this.state.skills.map((skill, index) => (
                            <div className="skill" key={index}>
                                <a target="_blanc" href={skill.url}>
                                    {skill.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
