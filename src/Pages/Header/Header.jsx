import React from "react";
import "../../Styles/Index.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
            <div className="header_containeer" id="myBody">
                <div className="block block-row">
                    <div class="menu-button">
                        <button>
                            <NavLink to="/works">
                                Works
                            </NavLink>
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
                            <NavLink to="/crypto">
                                <a href="#">Crypto</a>
                            </NavLink>
                        </button>
                    </div>
                </div>
                <div className="block block-logo">
                    <NavLink to="/">
                        <span>Vadim</span> Chorrny
                    </NavLink>
                </div>
                <div className="block block-contact">
                    <div className="menu-button" id="menu-contact">
                        <a href="#myBody"><input type="checkbox" class="toggle"/></a>
                    </div>
                    <div className="menu-button" id="menu-contact">
                        <button>
                            <NavLink to="/contact">
                                Contact
                            </NavLink>
                        </button>
                    </div>
                </div>
            </div>
    );
}