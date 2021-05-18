import React from "react";
import "./App.css";
import Header from "./components/header";
import RandomPlanet from "./components/random-planet";
import SwapiService from "./services/swapi-service";

import { SwapiServiceProvider } from "./components/swapi-service-context/swapi-service-context";
import Row from "./components/row/row";
import PeoplePage from "./components/pages/people-page";
import PlanetsPage from "./components/pages/planets-page";
import StarshipsPage from "./components/pages/starships-page";

export default class App extends React.Component {
  swapiService = new SwapiService();

  render() {
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div className="app">

          <Header />
          <RandomPlanet />

          <PeoplePage />
          <PlanetsPage />
          <StarshipsPage />
         
        </div>
      </SwapiServiceProvider>
    );
  }
}
