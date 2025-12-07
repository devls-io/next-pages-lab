// Função para buscar a lógica dos dados
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
    next: { revalidate: 3600 }, // Cache por 1 hora (ISR)
  });

  if (!res.ok) {
    throw new Error("Falha ao carregar posts");
  }

  return res.json();
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-8 transition-colors duration-300">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2 transition-colors duration-300">
          📰 Blog Híbrido Next.js
        </h1>

        <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
          Renderizado no Servidor (Server Component) consumindo JSONPlaceholder.
        </p>
      </div>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {posts.map((post) => (
          <article
            key={post.id}
            className="
              bg-white dark:bg-gray-900 
              text-gray-700 dark:text-gray-300
              p-6 rounded-lg shadow hover:shadow-md transition-all duration-300
              border border-gray-200 dark:border-gray-700 flex flex-col h-full
            "
          >
            <h2
              className="
              text-xl font-bold mb-3 capitalize 
              text-blue-700 dark:text-blue-400 
              transition-colors duration-300
              line-clamp-2 min-h-15
            "
            >
              {post.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-200 leading-relaxed transition-colors duration-300 grow text-justify">
              {post.body}
            </p>

            <div
              className="
              mt-4 pt-4 
              border-t border-gray-100 dark:border-gray-800
              flex justify-between items-center
              transition-colors duration-300
            "
            >
              <span className="text-xs text-gray-400 dark:text-gray-600 transition-colors duration-300">
                Post #{post.id}
              </span>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
