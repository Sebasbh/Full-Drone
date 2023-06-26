import { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (drone) => {
    setFavorites((prevFavorites) => [...prevFavorites, drone]);
  };

  const removeFavorite = (droneId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((drone) => drone._id !== droneId)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
