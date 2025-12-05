import nextJest from "next/jest.js";

// Import o helper oficial para criar a config
// Diz ao JEST para olhar na Raiz
const createJestConfig = nextJest({ dir: "./" });

// Configs personalizadas

const customJestConfig = {
  // Ao carregar, o jest roda esse arquivo
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // Define que os testes vão rodar no DOM simulado
  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(customJestConfig);
