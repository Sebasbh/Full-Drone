import React from 'react';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const CartButton = ({ droneId, onClick }) => {
  const handleCartClick = () => {
    onClick(droneId);
  };

  return (
    <Button icon={<ShoppingCartOutlined />} onClick={handleCartClick}>
    </Button>
  );
};

export default CartButton;


