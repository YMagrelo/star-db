import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spiner from '../spiner/spiner';
import PersonView from './person-view';
import './item-details.css';

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId } = this.props;
    if (!itemId) {
      return
    }
    
    this.setState({loading: true});

    this.swapiService.getPerson(itemId)
      .then((item) => {
        this.setState({ item, loading: false })
      })
  }

  onError = (error) => {
    this.setState({
      error: true,
      loading: false
    })
  };

  render() {
    const { item, error, loading } = this.state;
    if (error) {
      return <ErrorIndicator />
    }

    if (!item) {
      return null;
    }

    return (
      <div className="person-details card">
        {loading ? <Spiner /> : <PersonView person={item} />}
      </div>
    )
  }
}