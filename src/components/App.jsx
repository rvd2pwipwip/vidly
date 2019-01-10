import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./Movies";
import NavBar from "./common/NavBar";
import Customers from "./Customers";
import MovieForm from "./MovieForm";
import NotFound from "./NotFound";
import Rentals from "./Rentals";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
