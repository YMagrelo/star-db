import React, { Component } from 'react';

import './item-details.css';

const ItemView = ({ item, image, children }) => {
  return (
    <>
      <img className="person-image"
        src={image} />

      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          
          {React.Children.map(children, (child, i) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    </>
  )
}

export default ItemView;