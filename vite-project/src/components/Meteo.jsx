import React, { useState } from 'react';
import WeatherCard from './MeteoCard';
import '../styles/Meteo.css';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [history, setHistory] = useState([]);
  const cities = [
      { name: 'Paris', postalCode: '75000' },
      { name: 'Marseille', postalCode: '13000' },
      { name: 'Lyon', postalCode: '69000' },
      { name: 'Toulouse', postalCode: '31000' },
      { name: 'Nice', postalCode: '06000' },
  ];

  const filteredCities = cities.filter(city =>
      city.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
      setSearch(e.target.value);
  };

  const addToHistory = () => {
      if (search && !history.includes(search)) {
          setHistory([...history, search]);
      }
  };

  return (
    <div>
        <div className='search-container'>
            <input
                type="text"
                placeholder="Rechercher une ville..."
                value={search}
                onChange={handleSearch}
                className='search'
            />
            {search && (
              <ul className="autocomplete">
                {filteredCities.map((city, index) => (
                  <li key={index} onClick={() => setSearch(city.name)}>{city.name}</li>
                ))}
              </ul>
            )}
            <button onClick={addToHistory} className='search-button'>Click !</button>
        </div>
        <div className='history'>
            <h2>Historique des Recherches</h2>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <div className="cardContainer">
        {filteredCities.map((city, index) => (
            <WeatherCard key={index} city={city.name} postalCode={city.postalCode} />
        ))}
        </div>
    </div>
);
};

export default HomePage;
