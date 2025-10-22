import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import CartPage from './components/pages/CartPage.jsx';
import LoginPage from './components/pages/LoginPage';

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productos" element={<ProductsPage />} />
      <Route path="/carrito" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
