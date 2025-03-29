"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PropiedadesCarruselImagenes {
  imagenes: {
    url: string
    alt: string
    enlace?: string
  }[]
  manejarNavegacion: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
}

export function CarruselImagenes({ imagenes, manejarNavegacion }: PropiedadesCarruselImagenes) {
  const [indiceActual, setIndiceActual] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Cambiar imagen automáticamente cada 5 segundos
  useEffect(() => {
    if (!autoplay) return

    const intervalo = setInterval(() => {
      setIndiceActual((prevIndice) => (prevIndice + 1) % imagenes.length)
    }, 4000)

    return () => clearInterval(intervalo)
  }, [autoplay, imagenes.length])

  // Pausar autoplay al interactuar
  const pausarAutoplay = () => setAutoplay(false)
  const reanudarAutoplay = () => setAutoplay(true)

  const imagenAnterior = () => {
    pausarAutoplay()
    setIndiceActual((prevIndice) => (prevIndice - 1 + imagenes.length) % imagenes.length)
  }

  const imagenSiguiente = () => {
    pausarAutoplay()
    setIndiceActual((prevIndice) => (prevIndice + 1) % imagenes.length)
  }

  return (
    <section id="inicio" className="relative">
      <div className="relative h-[100vh] w-full overflow-hidden">
        {imagenes.map((imagen, indice) => (
          <div
            key={indice}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              indice === indiceActual ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={imagen.url || "/placeholder.svg"}
              alt={imagen.alt}
              fill
              sizes="100vw"
              priority={indice === 0}
              className="object-cover object-center brightness-50"
            />
            {imagen.enlace && (
              <a
                href={imagen.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full hover:bg-black/70"
              >
                Ver en Instagram
              </a>
            )}
          </div>
        ))}

        {/* Controles del carrusel */}
        <button
          onClick={imagenAnterior}
          onMouseEnter={pausarAutoplay}
          onMouseLeave={reanudarAutoplay}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={imagenSiguiente}
          onMouseEnter={pausarAutoplay}
          onMouseLeave={reanudarAutoplay}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white"
          aria-label="Imagen siguiente"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {imagenes.map((_, indice) => (
            <button
              key={indice}
              onClick={() => {
                pausarAutoplay()
                setIndiceActual(indice)
              }}
              onMouseEnter={pausarAutoplay}
              onMouseLeave={reanudarAutoplay}
              className={`w-2 h-2 rounded-full ${indice === indiceActual ? "bg-white" : "bg-white/50"}`}
              aria-label={`Ir a imagen ${indice + 1}`}
            />
          ))}
        </div>

        {/* Contenido superpuesto */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">Bienvenid@s!</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-md mb-8">
            Descubre nuestra nueva colección de temporada con diseños exclusivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#categorias"
              onClick={(e) => manejarNavegacion(e, "categorias")}
              className="border border-zinc-100 px-6 py-3 rounded-md font-medium hover:bg-zinc-800 transition-colors"
            >
              Categorías
            </a>
            <a
              href="#destacados"
              onClick={(e) => manejarNavegacion(e, "destacados")}
              className="bg-zinc-100 text-zinc-900 px-6 py-3 rounded-md font-medium hover:bg-zinc-200 transition-colors"
            >
              Destacados
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

