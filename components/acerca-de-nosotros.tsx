"use client"

import type React from "react"
import Image from "next/image"

interface PropiedadesAcercaDeNosotros {
  manejarNavegacion: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
}

// Componente actualizado con información específica de Coronel Oviedo
export function AcercaDeNosotros({ manejarNavegacion }: PropiedadesAcercaDeNosotros) {
  return (
    <section id="nosotros" className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenedor del logo circular */}
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-center">
            <Image
              src="/logo-circular.svg"
              alt="Logo de S&L Tienda - Nuestra marca de moda en Coronel Oviedo"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Acerca de S&L Tienda</h2>
            <p className="text-zinc-300 mb-4">
              Somos una tienda de Coronel Oviedo, Paraguay. Nos enfocamos en ofrecer una experiencia única de compra en
              prendas de vestir para damas y caballeros, tanto en nuestros locales físicos como también en nuestros
              canales online disponibles. La atención personalizada es parte fundamental de nuestra filosofía como
              Tienda.
            </p>
            <p className="text-zinc-300">
              Cada prenda en nuestra colección está cuidadosamente seleccionada para garantizar la mejor calidad y un
              estilo que perdure más allá de las tendencias pasajeras. Visitanos en nuestras tiendas en Coronel Oviedo y
              descubre por qué somos la opción preferida en moda.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

