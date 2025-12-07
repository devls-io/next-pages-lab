import Image from "next/image";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-8 transition-colors duration-300">
      <main className="container mx-auto max-w-4xl">
        
        {/* Título com destaque */}
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 border-l-4 border-blue-600 pl-4">
          Sobre o Projeto
        </h1>

        {/* Descrição do Laboratório */}
        <div className="prose dark:prose-invert max-w-none mb-10 text-gray-600 dark:text-gray-300">
          <p className="text-lg">
            Este projeto nasceu com uma missão simples: <strong>testar o sistema de rotas do Next.js</strong>. 
            Mas, como todo bom projeto de dev, a curiosidade venceu e o escopo cresceu. 🚀
          </p>
          <p className="mt-4">
            Hoje, o <em>Next Pages Lab</em> serve como meu playground pessoal para experimentar:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
            <li>Server Side Rendering e Data Fetching (com cache!).</li>
            <li>Layouts persistentes e Componentes reutilizáveis.</li>
            <li>Dark Mode persistente com Tailwind v4.</li>
            <li>E agora: <strong>Otimização automática de Imagens.</strong></li>
          </ul>
        </div>

        {/* --- A MÁGICA DO NEXT/IMAGE AQUI --- */}
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
          <Image
            src="/bg-code.jpg" // O caminho começa na pasta public
            alt="Uma tela de computador com código colorido, representando o desenvolvimento do projeto"
            fill // Ocupa 100% da div pai (absolute)
            priority // Diz pro Next: "Carregue essa imagem RÁPIDO, ela é importante!"
            className="object-cover" // Efeito de zoom suave
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Ajuda o navegador a escolher o tamanho certo
          />
          
          {/* Um overlay pra dar charme */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-6">
            <span className="text-white font-bold text-xl drop-shadow-md">
              📸 Imagem otimizada automaticamente
            </span>
          </div>
        </div>

        <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
                👆 Dê um olhada na imagem acima. O Next.js converteu o JPG em WebP super leve.
            </p>
        </div>

      </main>
    </div>
  );
}