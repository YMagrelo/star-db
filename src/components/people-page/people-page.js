import React from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import './people-page.css';
import SwapiService from '../../services/swapi-service';

export default class PeoplePage extends React.Component {
  swapiService = new SwapiService();
    state = {
      selectedPerson: 3,
      hasError: false
    }

    componentDidCatch() {
      this.setState({ hasError: true })
    }

    onPersonSelected = (id) => {
      this.setState({
        selectedPerson: id
      })
    }

    render() {
      if (this.state.hasError) {
        return <ErrorIndicator />
      }

      const itemList = (
        <ItemList 
          onItemSelected={this.onPersonSelected} 
          getData={this.swapiService.getAllPeople} 
          renderItem={({ name, gender, birthYear }) => `${name} (${gender} ${birthYear})`}
        />
      )
      return (
        <div className="row mb2">
          <div className="col-md-6">
            {itemList}
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      )
    }
}