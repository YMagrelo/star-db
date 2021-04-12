import React from 'react';
import './App.css';
import Header from './components/header';
import RandomPlanet from './components/random-planet';
import ItemList from './components/item-list/index';
import PersonDetails from './components/person-details/index';
import PeoplePage from './components/people-page/people-page';
import SwapiService from './services/swapi-service';

export default class App extends React.Component {
  swapiService = new SwapiService();

  render() {
    
    return (
      <div className="app">
        <Header />
        <RandomPlanet />

        <PeoplePage />
       

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList 
              onItemSelected={this.onPersonSelected} 
              getData={this.swapiService.getAllPlanets}
              renderItem={(item) => (<span>{item.name}</span>)}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList 
              onItemSelected={this.onPersonSelected} 
              getData={this.swapiService.getAllStarships}
              renderItem={(item) => item.name}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div> 

      </div>
    );
  }
}

