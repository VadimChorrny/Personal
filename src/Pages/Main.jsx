import React from "react";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Switch } from "react-router";
import Crypto from "./NFT/Crypto";
import Blog from "./Blog/Blog";
import Resume from "./CV/Resume";
import Privacy from "./Privacy/Privacy";

export default function Main() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Content} key="reload" />
                    <Route
                        exact
                        path="/skills"
                        component={Skills}
                        key="reload"
                    />
                    <Route exact path="/works" component={Works} key="reload" />
                    <Route
                        exact
                        path="/contact"
                        component={Contact}
                        key="reload"
                    />
                    <Route
                        exact
                        path="/crypto"
                        component={Crypto}
                        key="reload"
                    />
                    <Route exact path="/blog" component={Blog} key="reload" />
                    <Route
                        exact
                        path="/resume"
                        component={Resume}
                        key="reload"
                    />
                    <Route
                        exact
                        path="/privacy"
                        component={Privacy}
                        key="reload"
                    />
                </Switch>
                <Redirect exact from="/" component={Content} key="reload" />
            </BrowserRouter>
        </div>
    );
}
