import React from "react";
import Button from "../atoms/Button";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image || "/assets/default.jpg"}
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-secondary">{product.short}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <strong>
            {product.price.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </strong>
          <Button className="btn-sm btn-primary" onClick={() => onAdd(product)}>
            Agregar
          </Button>
        </div>
      </div>
    </div>
  );
}
