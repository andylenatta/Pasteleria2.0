import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/organisms/Navbar";

test("Navbar contiene enlaces principales", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  expect(screen.getByText("Inicio")).toBeInTheDocument();
  expect(screen.getByText("Catálogo")).toBeInTheDocument();
  expect(screen.getByText("Mi Perfil")).toBeInTheDocument();
});
