import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record/Record';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const StarshipDetails = ({ ...props }) => {

  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="crew" label="Crew" />
    </ItemDetails>
  )
  
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage,
  }
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);