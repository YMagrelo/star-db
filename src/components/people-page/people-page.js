import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import './people-page.css';
import SwapiService from '../../services/swapi-service';
import Row from '../row/row';
import ErrorBoundry from '../error-boundry/error-boundry';

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

      const itemList = (
        <ItemList 
          onItemSelected={this.onPersonSelected} 
          getData={this.swapiService.getAllPeople} 
          renderItem={(i) => `${i.name} (${i.birthYear})`}
        />
      )

      const personDetails = (
        <ItemDetails itemId={this.state.selectedPerson} />
      )

      return (
        <ErrorBoundry>
          <Row left={itemList} right={personDetails} />
        </ErrorBoundry>
      )
    }
}