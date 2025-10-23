import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";

test("HomePage muestra el título de bienvenida", () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
  expect(screen.getByText(/Mil Sabores/i)).toBeInTheDocument();
});
