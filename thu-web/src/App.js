import React from "react";
import { HashRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
