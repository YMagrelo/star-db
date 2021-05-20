/* eslint-disable react/display-name */
import React from 'react';
import withData from '../hoc-helpers/with-data';
import withSwapiService from '../hoc-helpers/with-swapi-service';
import ItemList from '../item-list';

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
}

const ListWithChildren = withChildFunction(
  ItemList,
  ({ name }) => <span>{name}</span>
)

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const PersonList = withSwapiService(mapPersonMethodsToProps)(withData(ListWithChildren));

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(withData(ListWithChildren));

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(withData(ListWithChildren));

export {
  PersonList,
  PlanetList,
  StarshipList,
}