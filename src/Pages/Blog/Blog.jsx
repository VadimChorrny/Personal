import React, { Component } from "react";
import axios from "axios";
import "../../Styles/Blog.scss";

export default class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: [],
            visibility: true,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state) => ({
            visibility: !state.visibility,
        }));
    }

    componentDidMount() {
        axios
            .get(`http://www.portfolio-vadym.somee.com/api/blog`)
            .then((res) => {
                const blogs = res.data;
                this.setState({ blogs });
            });
    }

    render() {
        if (this.state.visibility) {
            return (
                <div className="blog-containeer">
                    <div className="block block-name">
                        <h1>My Blog</h1>
                    </div>
                    <div class="container">
                        <div class="cards">
                            {this.state.blogs.map((blog, index) => (
                                <div class="card card-one" key={index}>
                                    <h2 class="card-title">{blog.title}</h2>
                                    <p class="date">{blog.date}</p>
                                    <button onClick={this.handleClick}>
                                        Read more
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="blog-containeer">
                    <div className="block block-name">
                        <h1>My Blog</h1>
                    </div>
                    <div class="container">
                        <div class="cards">
                            {this.state.blogs.map((blog) => (
                                <div class="card card-one">
                                    <h2 class="card-title">{blog.title}</h2>
                                    <p class="date">{blog.date}</p>
                                    <p class="description">
                                        {blog.description}
                                    </p>
                                    <button onClick={this.handleClick}>
                                        Hide
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
    }
}
