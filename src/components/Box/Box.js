import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './style.css';

export default function Box() {
  const [planet, setPlanet] = useState({films: [] });
  let [random, setRandom] = useState(1);

  useEffect(() => {
    async function loadPlanet() {
      const response = await api.get(`${random}`);

      setPlanet(response.data);
    }
    loadPlanet();

  }, [random]);


  return (
    <>
      <div className="box">
        <h2 className="planet_name">{planet.name ? planet.name : 'Loading...'}</h2>
        <hr />

        <div className="planet_population"><b>Population</b>: {planet.population ? planet.population : 'Loading...'}</div>
        <div className="planet_climate"><b>Climate</b>: {planet.climate ? planet.climate : 'Loading...'}</div>
        <div className="planet_terrain"><b>Terrain</b>: {planet.terrain ? planet.terrain : 'Loading...'}</div>

        <p className="planet_films">Featured in <b>{planet.films.length}</b> films.</p>
      </div>

      <button className="button" onClick={() => setRandom(Math.floor(parseInt(Math.random() * (62 - 1) + 1)))}>Next</button>
    </>
  );
};
