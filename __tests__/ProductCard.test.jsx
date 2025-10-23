import { render, screen } from "@testing-library/react";
import ProductCard from "@/components/molecules/ProductCard";

const product = { name: "Torta de Chocolate", price: 45000 };

test("ProductCard muestra nombre y precio", () => {
  render(<ProductCard product={product} onAdd={() => {}} />);
  expect(screen.getByText("Torta de Chocolate")).toBeInTheDocument();
  expect(screen.getByText(/\$45,000/i)).toBeInTheDocument();
});
