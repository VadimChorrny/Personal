import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import "../../Styles/Idea.scss";

export default class Idea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ideas: [],
        };
    }
    componentDidMount() {
        axios
            .get(`http://www.portfolio-vadym.somee.com/api/idea`)
            .then((res) => {
                const ideas = res.data;
                this.setState({ ideas });
            });
    }

    render() {
        return (
            <div className="work-containeer">
                <div className="block block-name">
                    <h1>Ideas</h1>
                </div>
                <div className="block block-work-list">
                    {this.state.ideas.map((idea) => (
                        <div className="work">
                            <h2>{idea.title}</h2>
                            <h3>{idea.description}</h3>
                            <h3>{idea.technology}</h3>
                            <button>
                                <a
                                    href={idea.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View
                                </a>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
