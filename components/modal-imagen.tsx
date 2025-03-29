"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface PropiedadesModalImagen {
  imagenes: {
    url: string
    alt: string
    titulo?: string
    descripcion?: string
  }[]
  indiceInicial?: number
  abierto: boolean
  onCerrar: () => void
}

export function ModalImagen({ imagenes, indiceInicial = 0, abierto, onCerrar }: PropiedadesModalImagen) {
  const [indiceActual, setIndiceActual] = useState(indiceInicial)
  const modalRef = useRef<HTMLDivElement>(null)

  // Actualizar el índice cuando cambia el índice inicial
  useEffect(() => {
    setIndiceActual(indiceInicial)
  }, [indiceInicial])

  // Manejar tecla Escape para cerrar
  useEffect(() => {
    const manejarTecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCerrar()
      } else if (e.key === "ArrowLeft") {
        imagenAnterior()
      } else if (e.key === "ArrowRight") {
        imagenSiguiente()
      }
    }

    if (abierto) {
      window.addEventListener("keydown", manejarTecla)
      // Bloquear scroll del body cuando el modal está abierto
      document.body.style.overflow = "hidden"
    }

    return () => {
      window.removeEventListener("keydown", manejarTecla)
      // Restaurar scroll cuando se desmonta
      document.body.style.overflow = ""
    }
  }, [abierto, onCerrar])

  // Cerrar al hacer clic fuera del contenido
  const manejarClicFuera = (e: React.MouseEvent) => {
    if (modalRef.current && e.target === modalRef.current) {
      onCerrar()
    }
  }

  const imagenAnterior = () => {
    setIndiceActual((prevIndice) => (prevIndice - 1 + imagenes.length) % imagenes.length)
  }

  const imagenSiguiente = () => {
    setIndiceActual((prevIndice) => (prevIndice + 1) % imagenes.length)
  }

  if (!abierto) return null

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-6"
      onClick={manejarClicFuera}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Botón cerrar */}
        <button
          onClick={onCerrar}
          className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
          aria-label="Cerrar"
          type="button"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Imagen actual */}
        <div className="relative w-full h-full">
          <div className="relative aspect-auto max-h-[80vh] flex items-center justify-center">
            <Image
              src={imagenes[indiceActual].url || "/placeholder.svg"}
              alt={imagenes[indiceActual].alt}
              width={1200}
              height={800}
              className="max-h-[80vh] w-auto h-auto object-contain"
              priority
            />
          </div>

          {/* Información de la imagen */}
          {(imagenes[indiceActual].titulo || imagenes[indiceActual].descripcion) && (
            <div className="bg-black/70 p-4 text-white">
              {imagenes[indiceActual].titulo && (
                <h3 className="text-lg font-semibold">{imagenes[indiceActual].titulo}</h3>
              )}
              {imagenes[indiceActual].descripcion && (
                <p className="mt-1 text-sm text-zinc-200">{imagenes[indiceActual].descripcion}</p>
              )}
            </div>
          )}
        </div>

        {/* Controles de navegación */}
        {imagenes.length > 1 && (
          <>
            <button
              onClick={imagenAnterior}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white"
              aria-label="Imagen anterior"
              type="button"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={imagenSiguiente}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white"
              aria-label="Imagen siguiente"
              type="button"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Indicadores */}
        {imagenes.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {imagenes.map((_, indice) => (
              <button
                key={indice}
                onClick={() => setIndiceActual(indice)}
                className={`w-2.5 h-2.5 rounded-full ${indice === indiceActual ? "bg-white" : "bg-white/50"}`}
                aria-label={`Ir a imagen ${indice + 1}`}
                type="button"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

