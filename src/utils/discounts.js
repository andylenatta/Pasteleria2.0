export function applyDiscountsToCart(items, user) {
  const subtotal = items.reduce((s, it) => s + it.product.price * it.qty, 0);
  let discount = 0;

  if (user?.discounts) {
    if (user.discounts.age50) discount = Math.max(discount, 0.5); // 50% if 50+
    if (user.discounts.felices50) discount = Math.max(discount, 0.1); // 10% lifetime
    if (user.discounts.duoc) {
      // ejemplo: torta gratis (gratis = 100% de uno de los productos?) Asumimos: 1 producto de menor precio gratis al registrarse
      // Aquí devolvemos separate flag — para simplificar aplicamos un descuento equivalente al precio del item más barato si hay items
      const cheapest = items.reduce((min, it) => it.product.price < min ? it.product.price : min, Infinity);
      if (cheapest !== Infinity) {
        // convertimos a descuento porcentual aproximado
        const possible = cheapest / subtotal;
        discount = Math.max(discount, possible);
      }
    }
  }

  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;
  return { subtotal, discountAmount, total, discountPercent: discount };
}
