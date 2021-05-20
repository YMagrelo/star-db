import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record/Record';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const PersonDetails = ({ ...props }) => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage,
  }
}


export default withSwapiService(mapMethodsToProps)(PersonDetails);