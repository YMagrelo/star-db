import React from 'react';

import './item-list.css';

const ItemList = ({ data, onItemSelected }) => {

  return (
    <ul className="item-list list-group test">
      {data.map((item) => {
        const { id } = item;

        return (
          <li
            className="list-group-item"
            key={id}
            onClick={() => onItemSelected(id)}
          >
            {item.name}
          </li>
        )
      })}
    </ul>
  );
}

export default ItemList;