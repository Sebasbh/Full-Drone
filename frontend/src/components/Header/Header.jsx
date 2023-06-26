import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header: AntdHeader } = Layout;

function Header() {
  const menuItems = [
    { key: 'home', label: 'Home', to: '/' },
    { key: 'cart', label: 'Carrito', to: '/cart' },
    { key: 'favorites', label: 'Favoritos', to: '/favorites' },
    { key: 'login', label: 'Iniciar sesión', to: '/login' }
    // Agrega más elementos de menú aquí
  ];

  // Desactivar la advertencia de Ant Design
  console.error = () => {};

  return (
    <AntdHeader>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
        {menuItems.map((item) => (
          <Menu.Item key={item.key}>
            <Link to={item.to}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </AntdHeader>
  );
}

export default Header;



