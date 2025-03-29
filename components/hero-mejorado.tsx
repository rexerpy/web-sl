"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { imagenesHombre, imagenesMujer, imagenesAccesorios } from "../data/productos"

interface PropiedadesHeroMejorado {
  manejarNavegacion: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
}

// Tipos de efectos disponibles
type TipoEfecto = "fade" | "zoom"

export function HeroMejorado({ manejarNavegacion }: PropiedadesHeroMejorado) {
  const [esPantallaGrande, setEsPantallaGrande] = useState(false)
  const [imagenesSeleccionadas, setImagenesSeleccionadas] = useState<typeof imagenesHombre>([])
  const [efectosAleatorios, setEfectosAleatorios] = useState<TipoEfecto[]>([])
  const [indiceActual, setIndiceActual] = useState(0)
  const [efectoActual, setEfectoActual] = useState<TipoEfecto>("fade")
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  // Combinar imágenes de todas las categorías
  const todasLasImagenes = [...imagenesHombre, ...imagenesMujer, ...imagenesAccesorios]

  // Función para obtener imágenes aleatorias
  const obtenerImagenesAleatorias = (imagenes: typeof todasLasImagenes, cantidad: number) => {
    const imagenesCopiadas = [...imagenes]
    const resultado = []

    // Asegurarse de no pedir más imágenes de las disponibles
    const cantidadReal = Math.min(cantidad, imagenesCopiadas.length)

    for (let i = 0; i < cantidadReal; i++) {
      const indiceAleatorio = Math.floor(Math.random() * imagenesCopiadas.length)
      resultado.push(imagenesCopiadas.splice(indiceAleatorio, 1)[0])
    }

    return resultado
  }

  // Función para obtener efectos aleatorios
  const obtenerEfectosAleatorios = (cantidad: number): TipoEfecto[] => {
    const efectosDisponibles: TipoEfecto[] = ["fade", "zoom"]
    const efectos: TipoEfecto[] = []

    for (let i = 0; i < cantidad; i++) {
      const indiceAleatorio = Math.floor(Math.random() * efectosDisponibles.length)
      efectos.push(efectosDisponibles[indiceAleatorio])
    }

    return efectos
  }

  // Inicializar imágenes y efectos
  useEffect(() => {
    // Seleccionar imágenes aleatorias
    const imagenes = obtenerImagenesAleatorias(todasLasImagenes, 8)
    setImagenesSeleccionadas(imagenes)

    // Generar efectos aleatorios para cada transición
    const efectos = obtenerEfectosAleatorios(imagenes.length)
    setEfectosAleatorios(efectos)
    setEfectoActual(efectos[0])

    // Detectar si es pantalla grande
    const comprobarTamañoPantalla = () => {
      setEsPantallaGrande(window.innerWidth > 1024)
    }

    // Comprobar al inicio y cuando cambie el tamaño de la ventana
    comprobarTamañoPantalla()
    window.addEventListener("resize", comprobarTamañoPantalla)

    return () => {
      window.removeEventListener("resize", comprobarTamañoPantalla)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  // Cambiar imagen automáticamente
  useEffect(() => {
    if (imagenesSeleccionadas.length === 0) return

    const cambiarImagen = () => {
      setIndiceActual((prevIndice) => {
        const nuevoIndice = (prevIndice + 1) % imagenesSeleccionadas.length
        setEfectoActual(efectosAleatorios[nuevoIndice % efectosAleatorios.length])
        return nuevoIndice
      })
    }

    // Iniciar intervalo para cambiar imágenes
    intervalRef.current = setInterval(cambiarImagen, 4000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [imagenesSeleccionadas.length, efectosAleatorios])

  // Obtener clases CSS según el efecto
  const obtenerClasesEfecto = (indice: number): string => {
    const esActual = indice === indiceActual
    const baseClass = esActual ? "opacity-100 z-10" : "opacity-0 z-0"

    if (!esActual) return baseClass

    switch (efectoActual) {
      case "fade":
        return `${baseClass} transition-opacity duration-1500`
      case "zoom":
        return `${baseClass} transition-all duration-1500 scale-100`
      default:
        return `${baseClass} transition-opacity duration-1500`
    }
  }

  // Obtener clases CSS iniciales según el efecto
  const obtenerClasesIniciales = (efecto: TipoEfecto): string => {
    switch (efecto) {
      case "zoom":
        return "scale-110"
      default:
        return ""
    }
  }

  // Si no hay imágenes seleccionadas aún, mostrar un placeholder
  if (imagenesSeleccionadas.length === 0) {
    return (
      <section id="inicio" className="relative h-[100vh]">
        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
          <p>Cargando...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="inicio" ref={heroRef} className="relative h-[100vh] w-full overflow-hidden">
      {/* Versión para pantallas grandes (grid con carrusel) */}
      {esPantallaGrande ? (
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1 bg-zinc-900">
          {/* Mostrar 6 imágenes en grid, rotando según el índice actual */}
          {Array.from({ length: 6 }).map((_, posicion) => {
            const indiceImagen = (indiceActual + posicion) % imagenesSeleccionadas.length
            const imagen = imagenesSeleccionadas[indiceImagen]

            return (
              <div key={posicion} className="relative w-full h-full overflow-hidden">
                <div className="absolute inset-0 transition-all duration-1000">
                  <Image
                    src={imagen.url || "/placeholder.svg"}
                    alt={`${imagen.alt} - S&L Tienda - Moda en Coronel Oviedo`}
                    fill
                    sizes="33vw"
                    className="object-cover object-center brightness-75 hover:brightness-90 transition-all duration-500"
                    priority={posicion < 2}
                  />
                </div>
              </div>
            )
          })}

          {/* Overlay con gradiente para mejorar la legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/40 to-zinc-900/20 pointer-events-none" />
        </div>
      ) : (
        // Versión para pantallas pequeñas (carrusel tradicional)
        <div className="absolute inset-0">
          {imagenesSeleccionadas.map((imagen, indice) => {
            const claseInicial = obtenerClasesIniciales(efectoActual)

            return (
              <div key={indice} className={`absolute inset-0 ${claseInicial} ${obtenerClasesEfecto(indice)}`}>
                <Image
                  src={imagen.url || "/placeholder.svg"}
                  alt={`${imagen.alt} - S&L Tienda - Moda en Coronel Oviedo`}
                  fill
                  sizes="100vw"
                  priority={indice === 0}
                  className="object-cover object-center brightness-50"
                />
              </div>
            )
          })}
        </div>
      )}

      {/* Contenido superpuesto (igual para ambas versiones) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
          ¡Bienvenid@s!
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-md mb-8">
          Descubre nuestra nueva colección de temporada con diseños exclusivos para damas y caballeros.
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
          <a
            href="#contacto"
            onClick={(e) => manejarNavegacion(e, "contacto")}
            className="border border-zinc-100 px-6 py-3 rounded-md font-medium hover:bg-zinc-800 transition-colors"
          >
            Contactos
          </a>
        </div>
      </div>
    </section>
  )
}

