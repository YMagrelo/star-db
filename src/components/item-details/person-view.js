import React, { Component } from 'react';

import './item-details.css';

const ItemView = ({ item, image }) => {

  return (
    <>
      <img className="person-image"
        src={image} />

      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{item.gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{item.birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{item.eyeColor}</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ItemView;