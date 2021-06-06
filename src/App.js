import React from "react";
import { BrowserRouter as Router, Route } from'react-router-dom';
import "./App.css";
import Header from "./components/header";
import RandomPlanet from "./components/random-planet";
import SwapiService from "./services/swapi-service";

import { SwapiServiceProvider } from "./components/swapi-service-context/swapi-service-context";
import PeoplePage from "./components/pages/people-page";
import PlanetsPage from "./components/pages/planets-page";
import StarshipsPage from "./components/pages/starships-page";

export default class App extends React.Component {
  swapiService = new SwapiService();

  render() {
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
        <div className="app">
          <Header />
          <RandomPlanet />

          <Route path="/people" component={PeoplePage} />
          <Route path="/planets" component={PlanetsPage} />
          <Route path="/starships" component={StarshipsPage} />

        </div>
        </Router>
    </SwapiServiceProvider>
    );
  }
}
