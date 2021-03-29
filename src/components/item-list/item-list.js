/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spiner from '../spiner/spiner';

import './item-list.css';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    itemList: null
  }

  componentDidMount() {
    const { getData } = this.props;
    getData()
      .then((itemList) => {
        this.setState({
          itemList
        })
      });
  }


  render() {
    const { itemList } = this.state;
    const { onItemSelected } = this.props;
    if (!itemList) {
      return <Spiner />
    }
    return (
      <ul className="item-list list-group">
        {itemList.map((item) => {
          const { id } = item;
          const label = this.props.renderItem(item);
          return (
            <li 
              className="list-group-item" 
              key={id}
              onClick={() => onItemSelected(id)}
            >
              {label}
            </li>
          )
        })}
      </ul>
    );
  }
}