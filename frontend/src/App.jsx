import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './components/Main/Context/FavoritesContext';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <FavoritesProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<Login />} />
            {/* Agrega más rutas aquí */}
          </Routes>
          <Footer />
        </div>
      </FavoritesProvider>
    </Router>
  );
}

export default App;
