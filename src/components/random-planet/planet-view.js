import React from 'react';
import './random-planet.css';


const PlanetView = ({ planet }) => {
  const {
    name,
    population,
    rotationPeriod,
    diameter,
    id,
  } = planet;
  return (
    <>
      <img className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="starwar planet" />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default PlanetView;