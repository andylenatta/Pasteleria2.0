import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container">
        {/* Logo o nombre */}
        <Link className="navbar-brand fs-4 fw-bold text-brown" to="/">
          🍰 Mil Sabores
        </Link>

        {/* Botón toggle móvil */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/catalogo" className="nav-link">
                Catálogo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/recetas" className="nav-link">
                Blog de Recetas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/perfil" className="nav-link">
                Mi Perfil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/carrito" className="nav-link">
                🛒 Carrito
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
