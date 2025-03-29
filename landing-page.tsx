"use client"
import { useEffect } from "react"
import { Header } from "./components/header"
import { HeroMejorado } from "./components/hero-mejorado"
import { Categorias } from "./components/categorias"
import { ProductosDestacados } from "./components/productos-destacados"
import { AcercaDeNosotros } from "./components/acerca-de-nosotros"
import { Footer } from "./components/footer"
import { SchemaOrg } from "./components/schema-org"
import { crearManejadorNavegacion } from "./utils/navegacion"
import { Suspense } from "react"
import dynamic from "next/dynamic"

// Importación dinámica para componentes que no son críticos para la carga inicial
// Esto mejora el rendimiento de carga inicial
const SeccionWhatsAppDynamic = dynamic(
  () => import("./components/seccion-whatsapp").then((mod) => ({ default: mod.SeccionWhatsApp })),
  {
    ssr: true,
    loading: () => <div className="py-16 px-4 md:px-6 bg-zinc-800 animate-pulse"></div>,
  },
)

export default function PaginaInicio() {
  // Función optimizada para desplazamiento suave
  const manejarNavegacion = crearManejadorNavegacion()

  // Manejar enlaces de anclaje al cargar la página
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const elemento = document.getElementById(id)
      if (elemento) {
        setTimeout(() => {
          const inicioY = window.scrollY
          const destinoY = elemento.getBoundingClientRect().top + inicioY
          const distancia = destinoY - inicioY

          const duracion = 400
          let tiempoInicio: number | null = null

          function animacion(tiempoActual: number) {
            if (tiempoInicio === null) tiempoInicio = tiempoActual
            const tiempoTranscurrido = tiempoActual - tiempoInicio
            const fraccion = Math.min(tiempoTranscurrido / duracion, 1)

            // Función de easing suave (easeOutQuint)
            const easing = 1 - Math.pow(1 - fraccion, 5)

            window.scrollTo(0, inicioY + distancia * easing)

            if (fraccion < 1) {
              window.requestAnimationFrame(animacion)
            }
          }

          window.requestAnimationFrame(animacion)
        }, 100)
      }
    }
  }, [])

  return (
    <>
      {/* Estructura principal actualizada para mejor rendimiento */}
      <div className="flex flex-col min-h-screen bg-zinc-900 text-zinc-100">
        <Header manejarNavegacion={manejarNavegacion} />

        <main className="flex-1">
          <HeroMejorado manejarNavegacion={manejarNavegacion} />
          <Categorias manejarNavegacion={manejarNavegacion} />
          <ProductosDestacados />
          <AcercaDeNosotros manejarNavegacion={manejarNavegacion} />
          <Suspense fallback={<div className="py-16 px-4 md:px-6 bg-zinc-800 animate-pulse"></div>}>
            <SeccionWhatsAppDynamic />
          </Suspense>
        </main>

        <Footer manejarNavegacion={manejarNavegacion} />
      </div>

      <SchemaOrg />
    </>
  )
}

