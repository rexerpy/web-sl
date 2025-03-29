// Schema.org optimizado para tienda de ropa en Coronel Oviedo
export function SchemaOrg() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          name: "S&L Tienda",
          description: "Tienda de moda y estilo con diseños exclusivos para damas y caballeros en Coronel Oviedo.",
          image: "https://syltienda.com/og-image.jpg",
          url: "https://syltienda.com",
          telephone: "+595971679868",
          email: "info@sltienda.com",
          priceRange: "$$",
          currenciesAccepted: "PYG",
          paymentAccepted: "Efectivo, Tarjeta de crédito, Transferencia bancaria",
          address: {
            "@type": "PostalAddress",
            streetAddress: "14 de Mayo y Padre Molas",
            addressLocality: "Coronel Oviedo",
            addressRegion: "Caaguazú",
            postalCode: "3300",
            addressCountry: "PY",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "-25.4444",
            longitude: "-56.4403",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "20:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday"],
              opens: "10:00",
              closes: "14:00",
            },
          ],
          sameAs: ["https://instagram.com/sl.tienda", "https://facebook.com/sl.tienda", "https://tiktok.com/@sltienda"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Catálogo de Ropa",
            itemListElement: [
              {
                "@type": "OfferCatalog",
                name: "Ropa para Hombre",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Polos Premium",
                      description: "Polos de alta calidad para hombres",
                    },
                  },
                ],
              },
              {
                "@type": "OfferCatalog",
                name: "Ropa para Mujer",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Vestidos Elegantes",
                      description: "Vestidos exclusivos para ocasiones especiales",
                    },
                  },
                ],
              },
              {
                "@type": "OfferCatalog",
                name: "Accesorios",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Gafas de Sol",
                      description: "Gafas de sol con protección UV",
                    },
                  },
                ],
              },
            ],
          },
        }),
      }}
    />
  )
}

