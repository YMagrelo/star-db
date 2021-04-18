import React, { Component } from 'react';

import './item-details.css';

const ItemView = ({ item, image, children }) => {
console.log('child view', children);
  return (
    <>
      <img className="person-image"
        src={image} />

      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {children }
        </ul>
      </div>
    </>
  )
}

export default ItemView;