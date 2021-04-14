import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home";
import Posts from "./components/posts";
import Profile from "./components/profile";

const App = () => {
    return (
        <BrowserRouter>
            <header>Header</header>
            <Route path="/" exact component={Home} />
            <Route path="/posts" exact component={Posts} />
            <Route path="/profile" exact component={Profile} />
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
