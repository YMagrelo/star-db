import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record/Record';
import { SwapiServiceConsumer } from '../swapi-service-context/swapi-service-context';

const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPerson, getPersonImage }) => {
          return (
            <ItemDetails 
              itemId={itemId} 
              getData={getPerson} 
              getImageUrl={getPersonImage}>
              <Record field="gender" label="Gender" />
              <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  )
};


export {
  PersonDetails,
}