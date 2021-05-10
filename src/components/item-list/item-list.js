import React from 'react';

import './item-list.css';

const ItemList = ({ data, onItemSelected, renderItem }) => {

  return (
    <ul className="item-list list-group">
      {data.map((item) => {
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

export default ItemList;