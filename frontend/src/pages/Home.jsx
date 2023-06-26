import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/api';
import DroneCards from '../components/Main/DroneCards';
import { FavoritesProvider } from '../components/Main/Context/FavoritesContext';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(jsonData => setData(jsonData));
  }, []);

  return (
    <FavoritesProvider>
      <div>
        <DroneCards drones={data} />
      </div>
    </FavoritesProvider>
  );
}

export default Home;



