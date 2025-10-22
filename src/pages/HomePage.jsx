import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="text-center py-5">
      <h1>🎂 Bienvenido a Pastelería Mil Sabores 🎂</h1>
      <p className="lead mt-3">
        Celebra la dulzura de la vida con nuestras tortas, postres y especialidades.
      </p>
      <div className="mt-4">
        <Link to="/catalogo" className="btn btn-primary me-2">Ver catálogo</Link>
        <Link to="/registro" className="btn btn-outline-secondary">Registrarse</Link>
      </div>
    </div>
  );
}
