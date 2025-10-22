import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link to="/" className="navbar-brand">Pastelería Mil Sabores</Link>
            <div>
              <Link to="/catalogo" className="me-3">Catálogo</Link>
              <Link to="/carrito">Carrito</Link>
            </div>
          </div>
        </nav>

        <main className="container py-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogo" element={<CatalogPage />} />
            <Route path="/registro" element={<RegisterPage />} />
            <Route path="/carrito" element={<CartPage />} />
            <Route path="*" element={<h2>Página no encontrada</h2>} />
          </Routes>
        </main>
      </CartProvider>
    </AuthProvider>
  );
}
export default App;
