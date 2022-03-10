import React from "react";
import "../../Styles/Works.scss";
import axios from "axios";
export default class Works extends React.Component {
    state = {
        works: [],
    };
    componentDidMount() {
        axios.get(`https://localhost:44356/api/Work`).then((res) => {
            const works = res.data;
            this.setState({ works });
        });
    }
    render() {
        return (
            <div className="works-containeer">
                <div className="block block-name">
                    <h1>Works</h1>
                </div>
                <div className="block block-work-list">
                    {this.state.works.map((work) => (
                        <div className="work">
                            <h2>{work.name}</h2>
                            <h3>{work.description}</h3>
                            <button>
                                <a
                                    href={work.url}
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
