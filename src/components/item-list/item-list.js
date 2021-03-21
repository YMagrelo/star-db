/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spiner from '../spiner/spiner';

import './item-list.css';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null
  }

  componentDidMount() {
    this.swapiService.getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        })
      });
  }


  render() {
    const { peopleList } = this.state;
    const { onPersonSelected } = this.props;
    if (!peopleList) {
      return <Spiner />
    }
    return (
      <ul className="item-list list-group">
        {peopleList.map((person) => {
          return (
            <li 
              className="list-group-item" 
              key={person.id}
              onClick={() => onPersonSelected(person.id)}
            >
              {person.name}
            </li>
          )
        })}
      </ul>
    );
  }
}