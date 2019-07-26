import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Sun from "./animatedcomponents/Sun";
import CloudOne from "./animatedcomponents/CloudOneSun";
import CloudTwo from "./animatedcomponents/CloudTwoSun";
import UpHouse from "./animatedcomponents/UpHouse";
import ThuPicOne from "./animatedcomponents/ThuPicOne";
import ThuPicTwo from "./animatedcomponents/ThuPicTwo";
import AppParallax from "./AppParallax";
import InfoCard from "./components/InfoCard";
import ResearchPage from "./pages/ResearchPage";
import ViewPager from "./animatedcomponents/Carousel3D";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<AppParallax />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
