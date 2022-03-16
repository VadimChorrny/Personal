import React, { Component } from "react";
import Footer from "../Footer/Footer";
import axios from "axios";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: "",
        };
    }
    componentDidMount() {
        axios
            .get(`https://sv443.net/jokeapi/v2/joke/Programming?type=single`)
            .then((res) => {
                console.log(res.data.joke);
                const joke = res.data.joke;
                this.setState({ jokes: joke });
            });
    }
    render() {
        return (
            <div>
                <div className="content_containeer">
                    <h1>Full-stack HTML developer</h1>
                    <p>{this.state.jokes}</p>
                    <Footer
                        hours="1500"
                        projects="10"
                        skills="16"
                        other="19"
                    ></Footer>
                </div>
            </div>
        );
    }
}

export default Content;
