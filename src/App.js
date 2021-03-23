import React from 'react';
import './App.css';
import Header from './components/header';
import RandomPlanet from './components/random-planet';
import ItemList from './components/item-list/index';
import PersonDetails from './components/person-details/index';
import PeoplePage from './components/people-page/people-page';

export default class App extends React.Component {

  render() {
    
    return (
      <div className="app">
        <Header />
        <RandomPlanet />

        <PeoplePage />
       
      </div>
    );
  }
}

