import React from "react";
import "../../Styles/Index.scss";
import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header_containeer" id="myBody">
                <div className="block block-row">
                    <div class="menu-button">
                        <button>
                            <NavLink to="/works">Works</NavLink>
                        </button>
                    </div>
                    <div class="menu-button">
                        <button>
                            <NavLink to="/skills">
                                <a href="#">Skills</a>
                            </NavLink>
                        </button>
                    </div>
                    <div className="menu-button">
                        <button>
                            <NavLink to="/idea">
                                <a href="#">Ideas</a>
                            </NavLink>
                        </button>
                    </div>
                    <div className="menu-button">
                        <button>
                            <NavLink to="/blog">
                                <a href="#">Blog</a>
                            </NavLink>
                        </button>
                    </div>
                </div>
                <div className="block block-logo">
                    <NavLink to="/">
                        <span>Vadym</span> Chornyi
                    </NavLink>
                </div>
                <div className="block block-contact">
                    <div className="menu-button" id="menu-contact">
                        <button>
                            <NavLink to="/privacy">Privacy</NavLink>
                        </button>
                    </div>
                    <div className="menu-button" id="menu-contact">
                        <button>
                            <NavLink to="/resume">CV</NavLink>
                        </button>
                    </div>
                    <div className="menu-button" id="menu-contact">
                        <button>
                            <NavLink to="/contact">Contact</NavLink>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
