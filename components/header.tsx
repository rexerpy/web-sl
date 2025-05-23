"use client"

import type React from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

interface PropiedadesHeader {
  manejarNavegacion: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
}

// Header optimizado con enlaces centrados y logo ajustado
export function Header({ manejarNavegacion }: PropiedadesHeader) {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const alternarMenu = () => {
    setMenuAbierto(!menuAbierto)
  }

  // Función para manejar la navegación y cerrar el menú
  const manejarNavegacionYCerrarMenu = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    manejarNavegacion(e, id)
    setMenuAbierto(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/70 backdrop-blur">
        <div className="container mx-auto relative flex h-16 items-center">
          {/* Logo alineado con la sección de categorías */}
          <div className="absolute left-4 md:left-6">
            <a
              href="#inicio"
              onClick={(e) => manejarNavegacionYCerrarMenu(e, "inicio")}
              className="flex items-center"
              aria-label="S&L Tienda - Ir al inicio"
            >
              <div className="relative w-16 h-10 md:w-20 md:h-12">
                <Image
                  src="/logo.svg"
                  alt="Logo S&L Tienda - Moda en Coronel Oviedo"
                  fill
                  sizes="(max-width: 768px) 64px, 80px"
                  className="object-contain"
                  priority
                />
              </div>
            </a>
          </div>

          {/* Enlaces centrados en la pantalla */}
          <nav className="hidden md:flex items-center justify-center w-screen" aria-label="Navegación principal">
            <div className="flex gap-8">
              <a
                href="#inicio"
                onClick={(e) => manejarNavegacion(e, "inicio")}
                className="text-sm font-medium hover:text-zinc-400 transition-colors"
              >
                Inicio
              </a>
              <a
                href="#categorias"
                onClick={(e) => manejarNavegacion(e, "categorias")}
                className="text-sm font-medium hover:text-zinc-400 transition-colors"
              >
                Categorías
              </a>
              <a
                href="#destacados"
                onClick={(e) => manejarNavegacion(e, "destacados")}
                className="text-sm font-medium hover:text-zinc-400 transition-colors"
              >
                Destacados
              </a>
              <a
                href="#nosotros"
                onClick={(e) => manejarNavegacion(e, "nosotros")}
                className="text-sm font-medium hover:text-zinc-400 transition-colors"
              >
                Nosotros
              </a>
              <a
                href="#contacto"
                onClick={(e) => manejarNavegacion(e, "contacto")}
                className="text-sm font-medium hover:text-zinc-400 transition-colors"
              >
                Contactos
              </a>
            </div>
          </nav>

          {/* Botón de menú móvil */}
          <div className="absolute right-4 md:hidden">
            <button
              className="flex items-center justify-center rounded-md w-9 h-9 hover:bg-zinc-800"
              onClick={alternarMenu}
              aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuAbierto}
              aria-controls="menu-movil"
            >
              {menuAbierto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="fixed inset-0 top-16 z-40 bg-zinc-900 md:hidden" id="menu-movil">
          <nav className="flex flex-col gap-4 p-6" aria-label="Navegación móvil">
            <a
              href="#inicio"
              onClick={(e) => manejarNavegacionYCerrarMenu(e, "inicio")}
              className="text-lg font-medium hover:text-zinc-400 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#categorias"
              onClick={(e) => manejarNavegacionYCerrarMenu(e, "categorias")}
              className="text-lg font-medium hover:text-zinc-400 transition-colors"
            >
              Categorías
            </a>
            <a
              href="#destacados"
              onClick={(e) => manejarNavegacionYCerrarMenu(e, "destacados")}
              className="text-lg font-medium hover:text-zinc-400 transition-colors"
            >
              Destacados
            </a>
            <a
              href="#nosotros"
              onClick={(e) => manejarNavegacionYCerrarMenu(e, "nosotros")}
              className="text-lg font-medium hover:text-zinc-400 transition-colors"
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              onClick={(e) => manejarNavegacionYCerrarMenu(e, "contacto")}
              className="text-lg font-medium hover:text-zinc-400 transition-colors"
            >
              Contactos
            </a>

            {/* Divisor para separar la navegación de los iconos sociales */}
            <div className="h-px bg-zinc-800 my-4"></div>

            {/* Iconos de redes sociales */}
            <div className="flex justify-center gap-6 mt-2">
              <a
                href="https://instagram.com/sl.tienda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors p-2"
                aria-label="Visitar Instagram de S&L Tienda"
                onClick={() => setMenuAbierto(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-6 w-6 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/sl.tienda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors p-2"
                aria-label="Visitar Facebook de S&L Tienda"
                onClick={() => setMenuAbierto(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-6 w-6 fill-current"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@sltienda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors p-2"
                aria-label="Visitar Tiktok de S&L Tienda"
                onClick={() => setMenuAbierto(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-6 w-6 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

