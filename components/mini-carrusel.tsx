"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PropiedadesMiniCarrusel {
  imagenes: {
    url: string
    alt: string
    titulo?: string
    descripcion?: string
  }[]
  autoplay?: boolean
  intervalo?: number
  mostrarControles?: boolean
  mostrarIndicadores?: boolean
  className?: string
  onImagenClick?: (indice: number) => void
}

export function MiniCarrusel({
  imagenes,
  autoplay = true,
  intervalo = 4000,
  mostrarControles = true,
  mostrarIndicadores = true,
  className = "",
  onImagenClick,
}: PropiedadesMiniCarrusel) {
  const [indiceActual, setIndiceActual] = useState(0)
  const [pausado, setPausado] = useState(false)
  const carruselRef = useRef<HTMLDivElement>(null)

  // Referencias para el manejo de gestos táctiles
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const touchStartTime = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const touchEndY = useRef<number | null>(null)

  // Cambiar imagen automáticamente
  useEffect(() => {
    if (!autoplay || pausado || imagenes.length <= 1) return

    const timer = setInterval(() => {
      setIndiceActual((prevIndice) => (prevIndice + 1) % imagenes.length)
    }, intervalo)

    return () => clearInterval(timer)
  }, [autoplay, pausado, imagenes.length, intervalo])

  const imagenAnterior = () => {
    setPausado(true)
    setIndiceActual((prevIndice) => (prevIndice - 1 + imagenes.length) % imagenes.length)
  }

  const imagenSiguiente = () => {
    setPausado(true)
    setIndiceActual((prevIndice) => (prevIndice + 1) % imagenes.length)
  }

  const seleccionarImagen = (indice: number) => {
    setPausado(true)
    setIndiceActual(indice)
  }

  // Manejadores de eventos táctiles
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    touchStartTime.current = Date.now()
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
    touchEndY.current = e.touches[0].clientY
  }

  const handleTouchEnd = () => {
    if (
      !touchStartX.current ||
      !touchEndX.current ||
      !touchStartTime.current ||
      !touchStartY.current ||
      !touchEndY.current
    )
      return

    const diferenciaX = touchStartX.current - touchEndX.current
    const diferenciaY = touchStartY.current - touchEndY.current
    const tiempoTranscurrido = Date.now() - touchStartTime.current

    // Aumentamos el umbral para considerar un swipe horizontal
    const umbralSwipe = 80
    // Umbral para detectar scroll vertical
    const umbralScrollVertical = 50
    // Reducimos el tiempo máximo para considerar un tap vs swipe
    const tiempoMaximo = 250

    // Si hay más movimiento vertical que horizontal, es probablemente un scroll
    const esScrollVertical =
      Math.abs(diferenciaY) > Math.abs(diferenciaX) && Math.abs(diferenciaY) > umbralScrollVertical

    if (esScrollVertical) {
      // Es un scroll vertical, no hacemos nada con el carrusel
    } else if (Math.abs(diferenciaX) < 30 && tiempoTranscurrido < tiempoMaximo) {
      // Si el movimiento fue pequeño y rápido, considerarlo un tap
      if (onImagenClick) {
        onImagenClick(indiceActual)
      }
    } else if (Math.abs(diferenciaX) > umbralSwipe && tiempoTranscurrido < 400) {
      // Solo si fue un swipe horizontal significativo y relativamente rápido
      if (diferenciaX > 0) {
        // Swipe hacia la izquierda (siguiente)
        imagenSiguiente()
      } else {
        // Swipe hacia la derecha (anterior)
        imagenAnterior()
      }
    }
    // Si no cumple ninguna condición, no hacemos nada

    // Reiniciar valores
    touchStartX.current = null
    touchEndX.current = null
    touchStartY.current = null
    touchEndY.current = null
    touchStartTime.current = null
  }

  // Manejar clic en la imagen
  const handleImagenClick = () => {
    if (onImagenClick) {
      onImagenClick(indiceActual)
    }
  }

  return (
    <div
      ref={carruselRef}
      className={`relative h-full w-full overflow-hidden rounded-lg ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative h-full w-full">
        {imagenes.map((imagen, indice) => (
          <div
            key={indice}
            className={`absolute inset-0 transition-opacity duration-500 ${
              indice === indiceActual ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            onClick={handleImagenClick}
            style={{ cursor: onImagenClick ? "pointer" : "default" }}
          >
            <Image
              src={imagen.url || "/placeholder.svg"}
              alt={imagen.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center"
              priority={indice === 0}
            />

            {(imagen.titulo || imagen.descripcion) && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
                {imagen.titulo && <h3 className="text-sm font-semibold">{imagen.titulo}</h3>}
                {imagen.descripcion && <p className="text-xs mt-1">{imagen.descripcion}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {mostrarControles && imagenes.length > 1 && (
        <>
          <button
            onClick={imagenAnterior}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white z-30 w-8 h-8 flex items-center justify-center"
            aria-label="Imagen anterior"
            type="button"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={imagenSiguiente}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white z-30 w-8 h-8 flex items-center justify-center"
            aria-label="Imagen siguiente"
            type="button"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {mostrarIndicadores && imagenes.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {imagenes.map((_, indice) => (
            <button
              key={indice}
              onClick={() => seleccionarImagen(indice)}
              className={`w-2 h-2 rounded-full transition-colors ${
                indice === indiceActual ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Ir a imagen ${indice + 1}`}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  )
}

