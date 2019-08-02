import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import HomePage from "./pages/HomePage";
import BoxHome from "./animatedcomponents/Box";
import GreetingHome from "./animatedcomponents/GreetingHome";
import Pug from "./animatedcomponents/Pug";
import AboutPage from "./pages/AboutPage";
import AppMain from "./main/AppMain";
import Timeline from "./animatedcomponents/Timeline";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";

ReactDOM.render(<AppMain />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
