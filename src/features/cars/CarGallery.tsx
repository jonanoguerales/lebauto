// src/components/cars/CarGallery.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";

interface CarGalleryProps {
  images: string[];
  altPrefix?: string;
}

export default function CarGallery({ images, altPrefix = "Imagen del vehículo" }: CarGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCurrentImageLoading, setIsCurrentImageLoading] = useState(true);
  const [thumbnailLoadingStates, setThumbnailLoadingStates] = useState<Record<number, boolean>>({});
  const [direction, setDirection] = useState(0); // Para la dirección de la animación de slide

  const totalImages = images?.length || 0;

  useEffect(() => {
    if (totalImages > 0 && images[currentImageIndex]) { // Verifica que la imagen exista
      setIsCurrentImageLoading(true);
    }
  }, [currentImageIndex, images, totalImages]);

  useEffect(() => {
    const initialStates: Record<number, boolean> = {};
    if (images) {
      images.forEach((_, index) => { initialStates[index] = true; });
    }
    setThumbnailLoadingStates(initialStates);
  }, [images]);

  const handleImageLoad = () => setIsCurrentImageLoading(false);
  const handleImageError = () => {
    setIsCurrentImageLoading(false);
    if (images && images[currentImageIndex]) {
      console.warn(`Error al cargar imagen principal: ${images[currentImageIndex]}`);
    }
  };

  const handleThumbnailLoad = (index: number) => setThumbnailLoadingStates(prev => ({ ...prev, [index]: false }));
  const handleThumbnailError = (index: number) => {
    setThumbnailLoadingStates(prev => ({ ...prev, [index]: false }));
    if (images && images[index]) {
      console.warn(`Error al cargar miniatura: ${images[index]}`);
    }
  };

  const paginate = (newDirection: number) => {
    if (totalImages === 0) return;
    const newIndex = (currentImageIndex + newDirection + totalImages) % totalImages;
    if (newIndex !== currentImageIndex) {
        setDirection(newDirection); // Establece la dirección para la animación
        setCurrentImageIndex(newIndex);
        // setIsCurrentImageLoading(true); // Ya se maneja en el useEffect de currentImageIndex
    }
  };

  const selectThumbnail = (index: number) => {
    if (index !== currentImageIndex) {
        setDirection(index > currentImageIndex ? 1 : -1);
        setCurrentImageIndex(index);
        // setIsCurrentImageLoading(true); // Ya se maneja en el useEffect de currentImageIndex
    }
  }

  if (!images || totalImages === 0) {
    return (
      <div className="mb-8">
        <Skeleton className="h-[200px] xxs:h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-lg" />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="aspect-square w-full rounded-md" />
          ))}
        </div>
      </div>
    );
  }

  // Variantes de animación para la imagen principal
  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98, // Un ligero encogimiento al entrar/salir puede ayudar
    }),
    center: {
      zIndex: 1, // La imagen activa debe estar encima
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: (direction: number) => ({
      zIndex: 0, // La imagen que sale debe estar detrás
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  return (
    <div className="mb-8" role="region" aria-labelledby="gallery-title">
      <h2 id="gallery-title" className="sr-only">Galería de imágenes del vehículo</h2>
      
      <div className="relative h-[200px] xxs:h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-muted">
        <AnimatePresence initial={false} custom={direction} mode="popLayout"> 
        {/* mode="popLayout" puede ayudar con cambios de tamaño si las imágenes son diferentes */}
          <motion.div
            key={currentImageIndex} // Crucial para que AnimatePresence funcione
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full" // Ocupa todo el espacio del contenedor
          >
            {/* Esqueleto para la imagen actual mientras carga */}
            {isCurrentImageLoading && (
              <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />
            )}
            <Image
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={`${altPrefix} ${currentImageIndex + 1} de ${totalImages}`}
              fill
              className={`object-cover transition-opacity duration-150 ${isCurrentImageLoading ? 'opacity-0' : 'opacity-100'}`}
              priority={currentImageIndex === 0} // Prioridad solo para la primera imagen de la galería
              onLoad={handleImageLoad}
              onError={handleImageError}
              sizes="(max-width: 420px) 100vw, (max-width: 520px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 60vw, 66vw" // ¡AJUSTA ESTO!
            />
          </motion.div>
        </AnimatePresence>

        {/* Controles de Navegación y Contador */}
        {totalImages > 1 && (
          <>
            <div className="absolute inset-0 flex items-center justify-between p-1 sm:p-2 z-10 pointer-events-none"> {/* Contenedor de botones */}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => paginate(-1)} 
                className="bg-black/30 hover:bg-black/50 text-white rounded-full pointer-events-auto w-8 h-8 sm:w-10 sm:h-10" 
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => paginate(1)} 
                className="bg-black/30 hover:bg-black/50 text-white rounded-full pointer-events-auto w-8 h-8 sm:w-10 sm:h-10" 
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="w-4 h-4 sm:w-5" />
              </Button>
            </div>
            <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-0.5 rounded-full text-xs z-10">
              {currentImageIndex + 1} / {totalImages}
            </div>
          </>
        )}
      </div>

      {/* Miniaturas */}
      {totalImages > 1 && (
        <div className="grid grid-cols-4 xs:grid-cols-6 sm:grid-cols-8 gap-1.5 sm:gap-2 mt-2">
          {images.map((imageSrc, index) => (
            <button
              key={`thumb-${index}`}
              onClick={() => selectThumbnail(index)}
              className={`relative aspect-square rounded-md overflow-hidden bg-muted
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1
                          ${currentImageIndex === index ? "ring-2 ring-primary ring-offset-1" : "hover:opacity-75 transition-opacity"}`}
              aria-label={`Ver imagen ${index + 1}`}
            >
              {thumbnailLoadingStates[index] && (
                <Skeleton className="absolute inset-0 w-full h-full rounded-md" />
              )}
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={`Miniatura ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-150 ${thumbnailLoadingStates[index] ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => handleThumbnailLoad(index)}
                onError={() => handleThumbnailError(index)}
                sizes="100px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}