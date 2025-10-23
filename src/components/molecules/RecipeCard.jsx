import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="card-img-top"
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{recipe.title}</h5>
        <p className="card-text text-secondary">{recipe.description}</p>
        <div className="mt-auto">
          <Link to={`/receta/${recipe.id}`} className="btn btn-primary btn-sm">
            Ver receta
          </Link>
        </div>
      </div>
    </div>
  );
}
