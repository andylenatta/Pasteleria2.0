import React from "react";
import { Link } from "react-router-dom";
import recipes from "../services/recipes";
import RecipeCard from "../components/molecules/RecipeCard";

export default function RecetasPage() {
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>🍰 Todas las recetas</h2>
        <Link to="/" className="btn btn-outline-secondary">Volver al inicio</Link>
      </div>

      <div className="row g-3">
        {recipes.map((r) => (
          <div key={r.id} className="col-12 col-sm-6 col-md-4">
            <RecipeCard recipe={r} />
          </div>
        ))}
      </div>
    </div>
  );
}
