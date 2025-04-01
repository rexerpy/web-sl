import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { SpeedInsights } from '@vercel/speed-insights/next'
import "./globals.css"


// Configuración optimizada de la fuente
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Mejora el rendimiento de carga de fuentes
})

export const metadata: Metadata = {
  title: "S&L Tienda | Moda y Estilo en Coronel Oviedo",
  description:
    "Tienda de ropa exclusiva para damas y caballeros en Coronel Oviedo. Descubre nuestra colección de moda con diseños exclusivos y las últimas tendencias.",
  keywords:
    "ropa, moda, estilo, tienda de ropa, Coronel Oviedo, Paraguay, moda masculina, moda femenina, accesorios, ropa de hombre, ropa de mujer, tendencias",
  authors: [{ name: "S&L Tienda" }],
  creator: "S&L Tienda",
  publisher: "S&L Tienda",
  alternates: {
    canonical: "https://syltienda.com",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "S&L Tienda | Moda y Estilo en Coronel Oviedo",
    description:
      "Tienda de ropa exclusiva para damas y caballeros en Coronel Oviedo. Descubre nuestra colección de moda con diseños exclusivos y las últimas tendencias.",
    url: "https://syltienda.com",
    siteName: "S&L Tienda",
    images: [
      {
        url: "https://syltienda.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "S&L Tienda - Moda y Estilo en Coronel Oviedo",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  // Mantenemos la configuración básica de Twitter Cards para una mejor compatibilidad
  // con plataformas que usan este formato, aunque no uses Twitter específicamente
  twitter: {
    card: "summary_large_image",
    title: "S&L Tienda | Moda y Estilo en Coronel Oviedo",
    description:
      "Tienda de ropa exclusiva para damas y caballeros en Coronel Oviedo. Descubre nuestra colección de moda con las últimas tendencias.",
    images: ["https://syltienda.com/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: { url: "/apple-touch-icon.png" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "3tYoAJ8xzovAYksiB2rSXS8V_MNYjNujGUJYmnOQrlw",
  },
  category: "fashion",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      {/* Actualizado para mejor rendimiento y SEO */}
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}