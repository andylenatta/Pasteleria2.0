import React, { createContext, useState, useContext } from 'react';
import { applyDiscountsToCart } from '../utils/discounts';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); 
  const add = (product, qty = 1, custom = {}) => {
    setItems(prev => {
      const idx = prev.findIndex(i => i.product.code === product.code && JSON.stringify(i.custom) === JSON.stringify(custom));
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx].qty += qty;
        return copy;
      }
      return [...prev, { product, qty, custom }];
    });
  };
  const remove = (code) => setItems(prev => prev.filter(i => i.product.code !== code));
  const updateQty = (code, qty) => setItems(prev => prev.map(i => i.product.code === code ? {...i, qty} : i));
  const clear = () => setItems([]);

  const getSummary = (user) => {

    return applyDiscountsToCart(items, user);
  };

  return (
    <CartContext.Provider value={{ items, add, remove, updateQty, clear, getSummary }}>
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext);
