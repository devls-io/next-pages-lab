# ⚡ Next.Lab - Laboratório de Experimentos Next.js 16

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Jest](https://img.shields.io/badge/Jest-Testing-C21325?style=for-the-badge&logo=jest)

Este projeto é um laboratório prático desenvolvido para explorar as funcionalidades do **Next.js 16 (App Router)**, focado em entender a estrutura de pastas, server components e boas práticas de desenvolvimento moderno.

> 🔗 **Demo Online:** [Link do seu projeto na Vercel aqui - Colocar após o deploy]

---


## 🚀 Funcionalidades & Aprendizados

O objetivo principal foi sair da teoria e colocar a mão na massa com conceitos reais do mercado:

### 🏠 Home (Server Components & Data Fetching)
- Consumo de API externa (**JSONPlaceholder**) diretamente no servidor (Server Side Rendering).
- Renderização de lista de posts simulando um blog.
- Componentização e separação de responsabilidades (Lógica vs UI).

### 👤 Sobre (Next/Image)
- Implementação prática do componente **`<Image />`** do Next.js.
- Aprendizado sobre carregamento otimizado: conversão automática de formatos e redimensionamento responsivo.
- Uso de `priority` para LCP (Largest Contentful Paint).

### 📞 Contato (Interatividade & UI)
- Cartão de visita digital com design limpo e centralizado.
- Componentes interativos com efeitos de **Hover**, **Scale** e **Transições CSS**.
- Botão de acesso rápido ao GitHub.

### 🛠️ Infraestrutura & Qualidade
- **Dark Mode:** Sistema de tema claro/escuro com persistência via `localStorage`.
- **Layout Responsivo:** Header fixo (Sticky) com menu mobile (Hambúrguer) feito do zero com React State.
- **Testes Unitários:** Configuração de **Jest** e **React Testing Library** para garantir que componentes críticos (como o Header e o Fetch da Home) funcionem.
- **Code Quality:** Configuração  de **ESLint** e **Prettier** para manter o código padronizado.

---

### 📂 Estrutura do Projeto

 ```bash
├── public/           # Arquivos estáticos (Imagens do Avatar e Background)
├── src/
│   ├── __tests__/    # Testes Unitários (Jest + RTL)
│   ├── app/          # App Router (Rotas e Layouts)
│   │   ├── contato/  # Rota /contato
│   │   ├── sobre/    # Rota /sobre
│   │   ├── globals.css # Estilos Globais (Tailwind)
│   │   ├── layout.js # Layout Persistente (Root)
│   │   └── page.js   # Página Inicial (Home)
│   └── components/   # Componentes Reutilizáveis (Header, Footer, UI)
├── .prettierrc.mjs   # Regras de Formatação
├── eslint.config.mjs # Regras de Linting
└── jest.config.mjs   # Configuração de Testes
 ```

## 🧪 Como rodar localmente

1. **Clone o repositório:**
   
   git clone [https://github.com/devls-io/next-pages-lab.git](https://github.com/devls-io/next-pages-lab.git)

2. **Instale as dependências**

    cd next-pages-lab
    npm install

3. **Rode o servidor de desenvolvimento**

    npm run dev

4. **Rode os testes**

    npm test

