import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function CartPage() {
  const { items, updateQty, remove, getSummary, clear } = useCart();
  const { user } = useAuth();
  const summary = getSummary(user);

  const confirm = () => {
    
    const order = {
      id: 'PED' + Date.now(),
      items,
      summary,
      status: 'pendiente'
    };
    
    localStorage.setItem(`order_${order.id}`, JSON.stringify(order));
    clear();
    alert(`Pedido confirmado: ${order.id}`);
  };

  return (
    <div>
      <h2>Carrito</h2>
      {items.length === 0 ? <p>Tu carrito está vacío</p> : (
        <>
          <ul className="list-group mb-3">
            {items.map(it => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={it.product.code}>
                <div>
                  <strong>{it.product.name}</strong> <div className="text-secondary small">{it.custom?.message}</div>
                </div>
                <div>
                  <input type="number" min="1" value={it.qty} onChange={(e)=> updateQty(it.product.code, parseInt(e.target.value,10))} style={{width:80}} />
                  <button className="btn btn-link" onClick={()=> remove(it.product.code)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="card p-3">
            <p>Subtotal: {summary.subtotal.toLocaleString('es-CL', {style:'currency',currency:'CLP'})}</p>
            <p>Descuento: -{summary.discountAmount.toLocaleString('es-CL', {style:'currency',currency:'CLP'})}</p>
            <h4>Total: {summary.total.toLocaleString('es-CL', {style:'currency',currency:'CLP'})}</h4>
            <button className="btn btn-primary" onClick={confirm}>Confirmar pedido</button>
          </div>
        </>
      )}
    </div>
  );
}
