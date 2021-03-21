/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spiner from '../spiner/spiner';
import PlanetView from './planet-view';
import './random-planet.css';


export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  }

  onError = (error) => {
    this.setState({
      error: true,
      loading: false
    })
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 3);
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }


  render() {
    const {
      planet,
      loading,
      error
    } = this.state;
    

    if (error) {
      return (
        <ErrorIndicator />
      )
    }

    return (
      <div className="random-planet jumbotron rounded">
        {loading ? <Spiner /> : <PlanetView planet={planet} />}
      </div>

    );
  }
}
