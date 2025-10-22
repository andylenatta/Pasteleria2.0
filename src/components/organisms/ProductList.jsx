import React from "react";
import ProductCard from "../molecules/ProductCard";

export default function ProductList({ products = [], onAdd }) {
  return (
    <div className="row g-3">
      {products.map((p) => (
        <div
          className="col-12 col-sm-6 col-md-4 col-lg-3"
          key={p.code}
        >
          <ProductCard product={p} onAdd={onAdd} />
        </div>
      ))}
      {products.length === 0 && (
        <p className="text-center text-secondary">No hay productos disponibles.</p>
      )}
    </div>
  );
}
