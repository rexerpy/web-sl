// Tipos de datos para productos e imágenes
export interface Imagen {
  url: string
  alt: string
  titulo?: string
  descripcion?: string
}

export interface Producto {
  id: number
  nombre: string
  categoria: "Hombre" | "Mujer" | "Accesorios"
  descripcion: string
  imagen: string
  precio?: string
  destacado?: boolean
}

// Datos de imágenes por categoría
export const imagenesHombre: Imagen[] = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bacocentral-20250328-0001.jpg-cRHMAYYPXpCYKvShpE50GFle48b0qb.jpeg",
    alt: "Polo Premium Camel - Detalle",
    titulo: "Polo Premium Camel",
    descripcion: "Confeccionado en algodón piqué con logo bordado dorado",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bacocentral-20250328-0003.jpg-xGgqCJnbu1EyloMiJ1jFpa1YUF383w.jpeg",
    alt: "Polo Premium Verde Oliva - Detalle",
    titulo: "Polo Premium Verde Oliva",
    descripcion: "Diseño clásico con acabados de alta calidad y logo distintivo",
  },
  // Nuevas imágenes de polos
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bacoasuncion-20250328-0002.jpg-HbrvFUCoiNlCB0B6iYX1ZoSoDqriTI.webp",
    alt: "Polo Essential Negro - Vista completa",
    titulo: "Polo Essential Negro",
    descripcion: "Elegante polo negro con corte slim fit y logo tono sobre tono",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bacoasuncion-20250328-0001.jpg-4P7hVPqb2YQqKKALDtpGx2l3gE4Nzu.webp",
    alt: "Polo Premium Celeste - Detalle",
    titulo: "Polo Premium Celeste",
    descripcion: "Suave tejido piqué con acabado premium y logo bordado",
  },
]

export const imagenesMujer: Imagen[] = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sl.tienda-20250328-0006.jpg-6RYDIvG3y7K2CweEpzT93vG9zrOEvt.jpeg",
    alt: "Vestido Glamour Rojo - Vista frontal",
    titulo: "Vestido Glamour Rojo",
    descripcion: "Elegante vestido ajustado con detalles brillantes",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sl.tienda-20250328-0007.jpg-PbXz1I6mnjsmlnVAAsWW36QU2IyB5u.jpeg",
    alt: "Vestido Glamour Rojo - Vista completa",
    titulo: "Vestido Glamour Rojo",
    descripcion: "Diseño ceñido perfecto para ocasiones especiales",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sl.tienda-20250328-0008.jpg-z45sktLTAplQi10mF90kFOMwcWLcey.jpeg",
    alt: "Vestido Glamour Rojo - Detalle de drapeado",
    titulo: "Vestido Glamour Rojo",
    descripcion: "Detalle del drapeado lateral y textura brillante",
  },
]

export const imagenesAccesorios: Imagen[] = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sl.tienda-20250328-0001.jpg-7RrcnlFl9x9rGyDVAt4WhUsY5BgPCE.jpeg",
    alt: "Gafas de Sol Elegance - Vista perfil",
    titulo: "Gafas de Sol Elegance",
    descripcion: "Diseño moderno con montura blanca y protección UV",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sl.tienda-20250328-0004.jpg-yWPsyxw3OTGm3s0lHKCJGyb2dyOEDR.jpeg",
    alt: "Gafas de Sol Elegance - Vista frontal",
    titulo: "Conjunto Urban Chic",
    descripcion: "Gafas de sol con cinturón decorativo y jeans de moda",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sl.tienda-20250328-0002.jpg-fyWQtkEPHzIuiagfV8FqxhQNjhZPYc.jpeg",
    alt: "Gafas de Sol Elegance - Detalle frontal",
    titulo: "Cinturón Medallion",
    descripcion: "Cinturón decorativo con medallones metálicos y detalles en cuero",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sl.tienda-20250328-0003.jpg-tHMSMYdJFoz8VdhO8HnHnHOZGPmSzG.jpeg",
    alt: "Gafas de Sol Elegance - Detalle lateral",
    titulo: "Gafas de Sol Elegance",
    descripcion: "Estilo oversized con detalles dorados en las patillas",
  },
]

// Catálogo completo de productos
export const productos: Producto[] = [
  {
    id: 1,
    nombre: "Polo Premium Camel",
    categoria: "Hombre",
    descripcion: "Polo clásico en color camel con logo bordado dorado, confeccionado en algodón piqué de alta calidad.",
    imagen:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bacocentral-20250328-0001.jpg-cRHMAYYPXpCYKvShpE50GFle48b0qb.jpeg",
    destacado: true,
  },
  {
    id: 2,
    nombre: "Polo Premium Verde Oliva",
    categoria: "Hombre",
    descripcion: "Polo en color verde oliva con logo bordado, ideal para un look casual con estilo.",
    imagen:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bacocentral-20250328-0003.jpg-xGgqCJnbu1EyloMiJ1jFpa1YUF383w.jpeg",
    destacado: true,
  },
  {
    id: 3,
    nombre: "Vestido Glamour Rojo",
    categoria: "Mujer",
    descripcion: "Elegante vestido ajustado con detalles brillantes, perfecto para ocasiones especiales.",
    imagen:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sl.tienda-20250328-0006.jpg-6RYDIvG3y7K2CweEpzT93vG9zrOEvt.jpeg",
    destacado: true,
  },
  {
    id: 4,
    nombre: "Gafas de Sol Elegance",
    categoria: "Accesorios",
    descripcion: "Gafas de sol con montura blanca oversized y protección UV completa.",
    imagen:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sl.tienda-20250328-0001.jpg-7RrcnlFl9x9rGyDVAt4WhUsY5BgPCE.jpeg",
    destacado: true,
  },
  {
    id: 5,
    nombre: "Cinturón Medallion",
    categoria: "Accesorios",
    descripcion: "Cinturón decorativo con medallones metálicos y detalles en cuero negro.",
    imagen:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sl.tienda-20250328-0002.jpg-fyWQtkEPHzIuiagfV8FqxhQNjhZPYc.jpeg",
    destacado: false,
  },
  {
    id: 6,
    nombre: "Conjunto Urban Chic",
    categoria: "Mujer",
    descripcion: "Top asimétrico blanco con jeans de corte amplio y accesorios a juego.",
    imagen:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sl.tienda-20250328-0004.jpg-yWPsyxw3OTGm3s0lHKCJGyb2dyOEDR.jpeg",
    destacado: false,
  },
  // Nuevos productos
  {
    id: 7,
    nombre: "Polo Essential Negro",
    categoria: "Hombre",
    descripcion: "Polo negro de corte moderno con logo tono sobre tono, perfecto para combinar con cualquier look.",
    imagen:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bacoasuncion-20250328-0002.jpg-HbrvFUCoiNlCB0B6iYX1ZoSoDqriTI.webp",
    destacado: true,
  },
  {
    id: 8,
    nombre: "Polo Premium Celeste",
    categoria: "Hombre",
    descripcion: "Polo en tono celeste suave, confeccionado en algodón piqué transpirable con logo bordado.",
    imagen:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bacoasuncion-20250328-0001.jpg-4P7hVPqb2YQqKKALDtpGx2l3gE4Nzu.webp",
    destacado: false,
  },
]

// Función para obtener productos destacados
export function obtenerProductosDestacados(limite = 4): Producto[] {
  return productos.filter((producto) => producto.destacado).slice(0, limite)
}

// Función para obtener productos por categoría
export function obtenerProductosPorCategoria(categoria: "Hombre" | "Mujer" | "Accesorios"): Producto[] {
  return productos.filter((producto) => producto.categoria === categoria)
}

