import React, { Component } from "react";
import "../../Styles/Resume.scss";

export default class Resume extends Component {
    render() {
        return (
            <div className="container">
                <h1>Resume</h1>
                <h4>Download full CV</h4>
                <button>
                    <a
                        href="./CV_Vadym_Chornyi.pdf"
                        download="./CV_Vadym_Chornyi.pdf"
                        target="_blank"
                    >
                        Download
                    </a>
                </button>
            </div>
        );
    }
}
