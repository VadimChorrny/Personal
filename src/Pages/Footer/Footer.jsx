import React from "react";
import "../../Styles/Index.scss";

export default function Footer(props) {
    return (
        <div className="footer-containeer">
            <div className="block">
                <p>
                    <span>{props.hours}+</span>
                    <br /> Hours
                </p>
            </div>
            <div className="block">
                <p>
                    <span>{props.projects}</span>
                    <br /> Projects
                </p>
            </div>
            <div className="block">
                <p>
                    <span>{props.skills}</span>
                    <br /> Skills
                </p>
            </div>
            <div className="block">
                <p>
                    <span>{props.other}</span>
                    <br /> Some
                </p>
            </div>
        </div>
    );
}
