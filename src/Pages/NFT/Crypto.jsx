import React from "react";
import axios from "axios";
import "../../Styles/Crypto.scss";

export default class Crypto extends React.Component {
    state = {
        persons: [],
    };

    componentDidMount() {
        axios.get(`http://www.portfolio-vadym.somee.com/api/cart`).then((res) => {
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
                    {this.state.persons.map((nft,index) => (
                        <div className="token" key={index}>
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
