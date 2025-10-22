import React, { useState, useEffect } from 'react';
import ProductList from '../components/organisms/ProductList';
import sampleData from '../services/sampleProducts';
import { useCart } from '../context/CartContext';

export default function CatalogPage() {
  const { add } = useCart();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({ category: 'all', search: '' });

  useEffect(() => setProducts(sampleData), []);

  const filtered = products.filter(p => (filter.category === 'all' || p.category === filter.category) && p.name.toLowerCase().includes(filter.search.toLowerCase()));

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Catálogo</h2>
        <div className="d-flex">
          <input className="form-control me-2" placeholder="Buscar..." value={filter.search} onChange={e => setFilter({...filter, search: e.target.value})} />
          <select className="form-select" value={filter.category} onChange={e => setFilter({...filter, category: e.target.value})}>
            <option value="all">Todas</option>
            <option value="cuadrada">Tortas Cuadradas</option>
            <option value="circular">Tortas Circulares</option>
            <option value="postre">Postres</option>
          </select>
        </div>
      </div>

      <ProductList products={filtered} onAdd={(p) => add(p, 1, {})} />
    </>
  );
}
