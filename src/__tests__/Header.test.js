import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header Component", () => {
  it("deve renderizar o logo corretamente", () => {
    render(<Header />);

    // verificar se a logo foi renderizada
    const logo = screen.getByText("⚡ Next.Lab");
    expect(logo).toBeInTheDocument();
  });

  it("deve alternar o estado do menu mobile ao clicar", () => {
    render(<Header />);

    // 1. Pega o botão
    const menuButton = screen.getByLabelText("Toggle Menu");

    // 2. Verifica se ele começa fechado (aria-expanded="false")
    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    // 3. CLICA NO BOTÃO
    fireEvent.click(menuButton);

    // 4. Verifica se ele abriu (aria-expanded="true")
    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    // 5. CLICA DE NOVO (Pra fechar)
    fireEvent.click(menuButton);

    // 6. Verifica se fechou
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });
});
