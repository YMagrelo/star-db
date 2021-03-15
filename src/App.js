import React from 'react';
import './App.css';
import Header from './components/header';
import RandomPlanet from './components/random-planet';
import ItemList from './components/item-list/index';
import PersonDetails from './components/person-details/index';
import Spiner from './components/spiner/spiner';

function App() {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
