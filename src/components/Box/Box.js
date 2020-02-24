import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './style.css';

export default function Box() {
  const [loading, setLoading] = useState(true)
  const [planet, setPlanet] = useState({ films: [] })
  const [numberOfPlanets, setNumberOfPlanets] = useState(0)
  let [random, setRandom] = useState(Math.floor(parseInt(Math.random() * (numberOfPlanets) + 1)))

  const getNumberOfPlanets = async () => {
    const allPlanetsResponse = await api.get()
    const count = allPlanetsResponse.data.count

    setNumberOfPlanets(count)
  }
  getNumberOfPlanets()

  useEffect(() => {
    
    setLoading(true)
    async function loadPlanet() {
      const response = await api.get(`${random}`)

      setPlanet(response.data)
      setLoading(false)
    }
    loadPlanet()

  }, [random])

  return (
    <>
      <div className="box">
        <h2 className="planet_name">{!loading ? planet.name : 'Loading...'}</h2>
        <hr />

        <div className="planet_population"><b>Population</b>: {!loading ? planet.population : 'Loading...'}</div>
        <div className="planet_climate"><b>Climate</b>: {!loading ? planet.climate : 'Loading...'}</div>
        <div className="planet_terrain"><b>Terrain</b>: {!loading ? planet.terrain : 'Loading...'}</div>

        <p className="planet_films">Featured in <b>{!loading ? planet.films.length : 'x'}</b> films.</p>
      </div>

      <button className="button" onClick={() => setRandom(Math.floor(parseInt(Math.random() * (numberOfPlanets) + 1)))}>Next</button>
    </>
  );
};
