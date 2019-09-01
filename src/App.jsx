import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Grid from "./components/Grid";

//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Redirect exact path = "/" to = "/LandingPage" />
          <Route path = "/LandingPage" component = { LandingPage } />
          <Route path = "/Grid" component = { Grid } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
