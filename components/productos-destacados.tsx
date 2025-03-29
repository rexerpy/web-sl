import Image from "next/image"
import { obtenerProductosDestacados } from "../data/productos"

export function ProductosDestacados() {
  // Obtener productos destacados del archivo de datos
  const productosDestacados = obtenerProductosDestacados(4)

  return (
    <section id="destacados" className="py-16 px-4 md:px-6 bg-zinc-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productosDestacados.map((producto) => (
            <div key={producto.id} className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                <Image
                  src={producto.imagen || "/placeholder.svg"}
                  alt={`${producto.nombre} - ${producto.categoria} - S&L Tienda - Ropa de moda en Coronel Oviedo`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-medium mb-1">{producto.nombre}</h3>
              <p className="text-zinc-400 mb-2">{producto.categoria}</p>
              <p className="text-zinc-300">{producto.descripcion}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center"></div>
      </div>
    </section>
  )
}

