import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import './people-page.css';
import SwapiService from '../../services/swapi-service';
import Row from '../row/row';
import ErrorBoundry from '../error-boundry/error-boundry';
import Record from '../record/Record';

export default class PeoplePage extends React.Component {
  swapiService = new SwapiService();

    state = {
      selectedPerson: 3,
    }

    onPersonSelected = (id) => {
      this.setState({
        selectedPerson: id
      })
    }

    render() {
      const { getPerson, getPersonImage } = this.swapiService;

      const itemList = (
        <ItemList 
          onItemSelected={this.onPersonSelected} 
          getData={this.swapiService.getAllPeople} 
          renderItem={(i) => `${i.name} (${i.birthYear})`}
        />
      )


      const personDetails = (
        <ItemDetails 
          itemId={11} 
          getData={getPerson} 
          getImageUrl={getPersonImage}>
          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
      );

      return (
        <ErrorBoundry>
          <Row left={itemList} right={personDetails} />
        </ErrorBoundry>
      )
    }
}