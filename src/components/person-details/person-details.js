import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spiner from '../spiner/spiner';
import PersonView from './person-view';

import './person-details.css';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return
    }
    
    this.setState({loading: true});

    this.swapiService.getPerson(personId)
      .then((person) => {
        this.setState({ person, loading: false })
      })
  }

  onError = (error) => {
    this.setState({
      error: true,
      loading: false
    })
  };

  render() {
    const { person, error, loading } = this.state;
    if (error) {
      return <ErrorIndicator />
    }

    if (!person) {
      return null;
    }

    return (
      <div className="person-details card">
        {loading ? <Spiner /> : <PersonView person={person} />}
      </div>
    )
  }
}