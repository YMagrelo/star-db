import React from 'react';
import SwapiService from '../../services/swapi-service';
import withData from '../hoc-helpers/with-data';

import './item-list.css';

const ItemList = ({ data, onItemSelected, renderItem }) => {
   
  return (
    <ul className="item-list list-group">
      {data.map((item) => {
        console.log(item);
        const { id } = item;
        const label = renderItem(item);

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

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);