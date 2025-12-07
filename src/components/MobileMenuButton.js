export default function MobileMenuButton({ isOpen, onClick }) {
  return (
    <button
      className="md:hidden cursor-pointer p-2 rounded-lg text-gray-700 dark:text-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]"
      onClick={onClick}
      aria-label="Toggle Menu"
      aria-expanded={isOpen}
    >
      {isOpen ? (
        // Ícone de X (Fechar)
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        // Ícone de Hambúrguer (Abrir)
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  );
}
