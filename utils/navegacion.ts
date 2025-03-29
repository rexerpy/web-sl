import type React from "react"
export function crearManejadorNavegacion() {
  const manejarNavegacion = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const elemento = document.getElementById(id)
    if (elemento) {
      const inicioY = window.scrollY
      const destinoY = elemento.getBoundingClientRect().top + inicioY
      const distancia = destinoY - inicioY

      // Duración de la animación en milisegundos
      const duracion = 400

      let tiempoInicio: number | null = null

      // Función de animación optimizada
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
    }
  }

  return manejarNavegacion
}

