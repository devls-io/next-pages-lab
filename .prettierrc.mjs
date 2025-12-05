/** @type {import("prettier").Config} */
const prettierConfig = {
  // Adiciona ponto e vírgula no final das linhas.
  // Por que? Evita erros raros de interpretação do JS (ASI).
  semi: true,

  // Usa aspas duplas (") em vez de simples (').
  // Por que? Padrão mais comum em JSON e HTML.
  singleQuote: false,

  // Tamanho da indentação é de 2 espaços.
  // Por que? Padrão da comunidade JS/React (economiza espaço horizontal).
  tabWidth: 2,

  // Adiciona vírgula no último item de objetos multilinhas.
  // Por que? Facilita o git diff e evita erros ao adicionar itens novos.
  trailingComma: "es5",

  // Quebra a linha se passar de 100 caracteres.
  // Por que? Melhora a leitura em monitores modernos.
  printWidth: 100,

  // Sempre coloca parênteses em arrow functions. Ex: (x) => x
  // Por que? Facilita adicionar tipagem ou novos argumentos no futuro.
  arrowParens: "always",

  // Resolve a briga entre Windows e Linux sobre quebra de linha.
  endOfLine: "auto",
};

export default prettierConfig;
