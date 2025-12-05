import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
  // 1. Configurações do Next.js (já vem como array, então espalhamos)
  ...nextVitals,

  // 2. Configurações do Prettier (Desativa regras do ESLint que conflitam)
  // No Flat Config, colocamos o objeto importado diretamente no array, sem "extends"
  prettierConfig,

  // 3. Plugin do Prettier (Para rodar o Prettier como regra de linter)
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error", // Aponta erro vermelho se a formatação estiver errada
      "arrow-body-style": "off", // Sugestão: evita conflito com one-liners do Prettier
      "prefer-arrow-callback": "off", // Sugestão: evita conflito de callbacks
    },
  },

  // 4. Ignorar arquivos globais
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts", "node_modules/**"],
  },
]);
