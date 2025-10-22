import React from 'react';
import { products } from '../../services/products';

export default function ProductsPage() {
  return (
    <div className="container">
      <h2>Catálogo</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
        {products.map(p => (
          <div key={p.id} style={{ padding: 12, borderRadius: 8, background: '#fff' }}>
            <h3>{p.name}</h3>
            <div>{p.category}</div>
            <div style={{ marginTop: 8, fontWeight: 700 }}>
              {p.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
