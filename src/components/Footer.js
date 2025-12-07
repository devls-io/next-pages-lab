export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-colors duration-300 mt-auto">
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/devls-io"
            target="_blank"
            rel="noopener noreferrer" // Segurança e Performance
            className="font-bold text-blue-700 dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
          >
            devls.io
          </a>
          . All rights reserved.
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-600 mt-2">
          Feito com Next.js 16, Tailwind v4 e muito café ☕
        </p>
      </div>
    </footer>
  );
}
