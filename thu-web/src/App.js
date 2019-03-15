import React from "react";
import { HashRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={HomePage} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
