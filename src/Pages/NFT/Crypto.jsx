import React from "react";
import axios from "axios";
import "../../Styles/Crypto.scss";

export default class Crypto extends React.Component {
    state = {
        persons: [],
    };

    componentDidMount() {
        axios.get(`https://localhost:44356/api/Cart`).then((res) => {
            const persons = res.data;
            this.setState({ persons });
        });
    }

    render() {
        return (
            <div className="nfc-containeer">
                <div className="block block-name">
                    <h1>NFT</h1>
                </div>
                <div className="block block-work-list">
                    {this.state.persons.map((nft) => (
                        <div className="token">
                            <h2>{nft.title}</h2>
                            <h3>{nft.description}</h3>
                            <button>
                                <a
                                    href={nft.url}
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
