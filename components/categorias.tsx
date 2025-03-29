"use client"

import type React from "react"
import { useState } from "react"
import { MiniCarrusel } from "./mini-carrusel"
import { ModalImagen } from "./modal-imagen"
import { imagenesHombre, imagenesMujer, imagenesAccesorios } from "../data/productos"

interface PropiedadesCategorias {
  manejarNavegacion: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
}

export function Categorias({ manejarNavegacion }: PropiedadesCategorias) {
  // Estado para controlar los modales
  const [modalMujerAbierto, setModalMujerAbierto] = useState(false)
  const [indiceImagenMujerModal, setIndiceImagenMujerModal] = useState(0)

  const [modalAccesoriosAbierto, setModalAccesoriosAbierto] = useState(false)
  const [indiceImagenAccesoriosModal, setIndiceImagenAccesoriosModal] = useState(0)

  const [modalHombreAbierto, setModalHombreAbierto] = useState(false)
  const [indiceImagenHombreModal, setIndiceImagenHombreModal] = useState(0)

  // Funciones para abrir los modales
  const abrirModalMujer = (indice: number) => {
    setIndiceImagenMujerModal(indice)
    setModalMujerAbierto(true)
  }

  const abrirModalAccesorios = (indice: number) => {
    setIndiceImagenAccesoriosModal(indice)
    setModalAccesoriosAbierto(true)
  }

  const abrirModalHombre = (indice: number) => {
    setIndiceImagenHombreModal(indice)
    setModalHombreAbierto(true)
  }

  // Funciones para manejar el clic en "Ver colección"
  const manejarVerColeccionMujer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    abrirModalMujer(0)
  }

  const manejarVerColeccionAccesorios = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    abrirModalAccesorios(0)
  }

  const manejarVerColeccionHombre = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    abrirModalHombre(0)
  }

  return (
    <section id="categorias" className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
<<<<<<< HEAD
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-8">Categorías</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Categoría Hombre */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-center mb-4">Hombres</h3>
            <div className="group relative aspect-square overflow-hidden rounded-lg">
              <div className="absolute inset-0">
                <MiniCarrusel
                  imagenes={imagenesHombre}
                  className="h-full"
                  intervalo={5000}
                  mostrarControles={true}
                  mostrarIndicadores={true}
                  onImagenClick={abrirModalHombre}
                />
              </div>
=======
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Categorías</h2>
        {/* Ajustamos el grid y las dimensiones para coincidir con destacados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Categoría Hombre */}
          <div className="group relative aspect-square overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <MiniCarrusel
                imagenes={imagenesHombre}
                className="h-full"
                intervalo={5000}
                mostrarControles={true}
                mostrarIndicadores={true}
                onImagenClick={abrirModalHombre}
              />
>>>>>>> 6b22277e5a4531ebcf845aad9bb42b3ebfd69f5d
            </div>
          </div>
          
          {/* Categoría Mujer */}
<<<<<<< HEAD
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-center mb-4">Mujeres</h3>
            <div className="group relative aspect-square overflow-hidden rounded-lg">
              <div className="absolute inset-0">
                <MiniCarrusel
                  imagenes={imagenesMujer}
                  className="h-full"
                  intervalo={5000}
                  mostrarControles={true}
                  mostrarIndicadores={true}
                  onImagenClick={abrirModalMujer}
                />
              </div>
=======
          <div className="group relative aspect-square overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <MiniCarrusel
                imagenes={imagenesMujer}
                className="h-full"
                intervalo={5000}
                mostrarControles={true}
                mostrarIndicadores={true}
                onImagenClick={abrirModalMujer}
              />
>>>>>>> 6b22277e5a4531ebcf845aad9bb42b3ebfd69f5d
            </div>
          </div>

          {/* Categoría Accesorios */}
<<<<<<< HEAD
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-center mb-4">Accesorios</h3>
            <div className="group relative aspect-square overflow-hidden rounded-lg">
              <div className="absolute inset-0">
                <MiniCarrusel
                  imagenes={imagenesAccesorios}
                  className="h-full"
                  intervalo={5000}
                  mostrarControles={true}
                  mostrarIndicadores={true}
                  onImagenClick={abrirModalAccesorios}
                />
              </div>
=======
          <div className="group relative aspect-square overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <MiniCarrusel
                imagenes={imagenesAccesorios}
                className="h-full"
                intervalo={5000}
                mostrarControles={true}
                mostrarIndicadores={true}
                onImagenClick={abrirModalAccesorios}
              />
>>>>>>> 6b22277e5a4531ebcf845aad9bb42b3ebfd69f5d
            </div>
          </div>
        </div>
      </div>

      {/* Modal para ver imágenes de Mujer en tamaño completo */}
      <ModalImagen
        imagenes={imagenesMujer}
        indiceInicial={indiceImagenMujerModal}
        abierto={modalMujerAbierto}
        onCerrar={() => setModalMujerAbierto(false)}
      />

      {/* Modal para ver imágenes de Accesorios en tamaño completo */}
      <ModalImagen
        imagenes={imagenesAccesorios}
        indiceInicial={indiceImagenAccesoriosModal}
        abierto={modalAccesoriosAbierto}
        onCerrar={() => setModalAccesoriosAbierto(false)}
      />

      {/* Modal para ver imágenes de Hombre en tamaño completo */}
      <ModalImagen
        imagenes={imagenesHombre}
        indiceInicial={indiceImagenHombreModal}
        abierto={modalHombreAbierto}
        onCerrar={() => setModalHombreAbierto(false)}
      />
    </section>
  )
}

