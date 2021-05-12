import React from 'react';
import './App.css';
import Header from './components/header';
import RandomPlanet from './components/random-planet';
import ItemDetails from './components/item-details/index';
import PeoplePage from './components/people-page/people-page';
import SwapiService from './services/swapi-service';
import Record from './components/record/Record';
import { PlanetList } from './components/sw-components/item-lists';
import { PersonDetails } from './components/sw-components/person-details';
import { PlanetDetails } from './components/sw-components/planet-details';
import { StarshipDetails } from './components/sw-components/starship-details';
import { SwapiServiceProvider } from './components/swapi-service-context/swapi-service-context';

export default class App extends React.Component {
  swapiService = new SwapiService();

  render() {

    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails 
        itemId={11} 
        getData={getPerson} 
        getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails 
        itemId={5} 
        getData={getStarship} 
        getImageUrl={getStarshipImage}>
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="crew" label="Crew" />
      </ItemDetails>
    );
    
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div className="app">
          <Header />
          <RandomPlanet />

          <PeoplePage />

          <PersonDetails itemId={11} />

          <PlanetDetails itemId={2} />

          <StarshipDetails itemId={5} />
       

          <div className="row mb2">
            <div className="col-md-6">
              <PlanetList 
                onItemSelected={this.onPersonSelected} 
                renderItem={(item) => (<span>{item.name}</span>)}
              />
            </div>
            <div className="col-md-6">
              <ItemDetails />
            </div>
          </div> 

        </div>
      </SwapiServiceProvider>
    );
  }
}

