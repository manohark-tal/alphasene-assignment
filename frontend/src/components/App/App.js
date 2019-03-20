import React, { Component } from "react";
import "./App.css";
import HomePage from "../../containers/Layout/HomePage";
import NavBar from "../../containers/Layout/NavBar";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
