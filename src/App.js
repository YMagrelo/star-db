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
import StarshipDetails from "./components/sw-components/starship-details";

export default class App extends React.Component {
  swapiService = new SwapiService();

  render() {
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
        <div className="app">
          <Header />
          <RandomPlanet />

          <Route 
            exact
            path="/" 
            render={() => <h2>Welcome to StarDB</h2>} 
          />
          <Route 
            exact
            path="/people" 
            render={() => <h2>People</h2>} 
          />
          <Route path="/people" component={PeoplePage} />
          <Route path="/planets" component={PlanetsPage} />
          <Route path="/starships" exact  component={StarshipsPage} />
          <Route 
            path="/starships/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <StarshipDetails itemId={id} />
            }}
          />

        </div>
        </Router>
    </SwapiServiceProvider>
    );
  }
}
