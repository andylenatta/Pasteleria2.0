import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="container">
      <h1>Pastelería 1000 Sabores</h1>
      <p>Bienvenido — demo inicial.</p>
      <nav>
        <Link to="/productos">Ver productos</Link> | <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}
