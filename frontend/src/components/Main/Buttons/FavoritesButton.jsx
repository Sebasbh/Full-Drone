import React, { useContext } from 'react';
import { Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { FavoritesContext } from '../Context/FavoritesContext';

const FavoritesButton = ({ drone }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.some((favDrone) => favDrone._id === drone._id);

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(drone._id);
    } else {
      addFavorite(drone);
    }
  };

  return (
    <Button
      icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
      onClick={handleClick}
    />
  );
};

export default FavoritesButton;
