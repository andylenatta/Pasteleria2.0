import React from "react";
import { Link } from "react-router-dom";
import recipes from "../services/recipes";
import RecipeCard from "../components/molecules/RecipeCard";

export default function HomePage() {
  return (
    <div>
      <div className="text-center py-5">
        <h1>🎂 Bienvenido a Pastelería Mil Sabores 🎂</h1>
        <p className="lead mt-3">
          Celebra la dulzura de la vida con nuestras tortas, postres y recetas caseras.
        </p>
        <div className="mt-4">
          <Link to="/catalogo" className="btn btn-primary me-2">
            Ver catálogo
          </Link>
          <Link to="/registro" className="btn btn-outline-secondary">
            Registrarse
          </Link>
        </div>
      </div>

      <section className="mt-5">
        <h2 className="text-center mb-4">🍰 Recetas destacadas</h2>
        <div className="row g-3">
          {recipes.map((r) => (
            <div key={r.id} className="col-12 col-sm-6 col-md-4">
              <RecipeCard recipe={r} />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5">
  <h2 className="text-center mb-4">🍰 Recetas destacadas</h2>
  <div className="row g-3">
    {recipes.slice(0, 3).map((r) => (   // solo las primeras 3 recetas
      <div key={r.id} className="col-12 col-sm-6 col-md-4">
        <RecipeCard recipe={r} />
      </div>
    ))}
  </div>

  {/* 👇 Nuevo botón para ver todas las recetas */}
  <div className="text-center mt-4">
    <Link to="/recetas" className="btn btn-primary">
      Ver todas las recetas
    </Link>
  </div>
</section>

    </div>
  );
}
