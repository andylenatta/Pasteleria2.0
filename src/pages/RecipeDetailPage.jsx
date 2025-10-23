import React from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "../services/recipes";

export default function RecipeDetailPage() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <p>Receta no encontrada.</p>;

  return (
    <div className="container py-4">
      <Link to="/" className="btn btn-link mb-3">← Volver</Link>
      <div className="card p-4">
        <h2>{recipe.title}</h2>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="img-fluid rounded mb-3"
        />
        <p>{recipe.description}</p>
        <h5 className="mt-3">Pasos:</h5>
        <ol>
          {recipe.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
