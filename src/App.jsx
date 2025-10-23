import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import RecetasPage from "./pages/RecetasPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import PerfilPage from "./pages/PerfilPage";
import Navbar from "./components/organisms/Navbar";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        {/* 🌸 Barra de navegación */}
        <Navbar />

        {/* 🌼 Contenido principal */}
        <main className="container py-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogo" element={<CatalogPage />} />
            <Route path="/registro" element={<RegisterPage />} />
            <Route path="/carrito" element={<CartPage />} />
            <Route path="/recetas" element={<RecetasPage />} />
            <Route path="/receta/:id" element={<RecipeDetailPage />} />
            <Route path="/perfil" element={<PerfilPage />} />
            <Route path="*" element={<h2>Página no encontrada</h2>} />
          </Routes>
        </main>

        {/* 🍪 Footer */}
        <footer>
          <p>© 2025 Pastelería Mil Sabores — Celebrando la dulzura de la vida 🍰</p>
        </footer>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
