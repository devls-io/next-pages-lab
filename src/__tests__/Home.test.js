import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// 1. O SIMULADOR DE API (Mock Limpo)
// Substituímos a função 'fetch' global do navegador/node por uma nossa.
// Por que dois Promise.resolve? Porque o fetch possui 2 etapas

global.fetch = jest.fn(() => {
  return Promise.resolve({
    ok: true, // Simula API com 200
    json: () =>
      Promise.resolve([
        // Simulando os dados que a página espera
        { id: 1, title: "Título do Post Fake 1", body: "Conteúdo do post 1" },
        { id: 2, title: "Título do Post Fake 2", body: "Conteúdo do post 2" },
      ]),
  });
});

describe("Home Page", () => {
  // Limpar o mock antes de cada teste, evita lixo
  beforeEach(() => {
    fetch.mockClear();
  });

  it("deve buscar dados no servidor e renderizar os posts", async () => {
    // Home é async então precisamos do await
    // Não funciona renderizar diretamente

    const jsx = await Home();

    render(jsx);

    // O teste procura pelo texto que nosso mock retornou

    expect(screen.getByText("Título do Post Fake 1")).toBeInTheDocument();
    expect(screen.getByText("Conteúdo do post 1")).toBeInTheDocument();

    // Garante que o fetch foi chamado 1 vez
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
