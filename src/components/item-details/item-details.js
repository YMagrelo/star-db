import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spiner from '../spiner/spiner';
import ItemView from './item-view';
import './item-details.css';

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    loading: true,
    error: false,
    image: null
  }

  componentDidMount() {
    if(this.props.getData) {
      this.updateItem()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
   
    if (!itemId) {
      return
    }
   
    this.setState({loading: true});

    getData(itemId)
      .then((item) => {
        this.setState({ 
          item, 
          loading: false,
          image: getImageUrl(itemId)
        })
      })
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  };

  render() {
    const { item, error, loading, image } = this.state;
    if (error) {
      return <ErrorIndicator />
    }

    if (!item) {
      return null;
    }

    return (
      <div className="person-details card">
        {loading ? <Spiner /> : <ItemView item={item} image={image}>
          {this.props.children}
        </ItemView>}
      </div>
    )
  }
}