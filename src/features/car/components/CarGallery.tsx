"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X as XIcon, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface CarGalleryProps {
  images: string[];
  altPrefix?: string;
}

export default function CarGallery({ images, altPrefix = "Imagen del vehículo" }: CarGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCurrentImageLoading, setIsCurrentImageLoading] = useState(true);
  const [thumbnailLoadingStates, setThumbnailLoadingStates] = useState<Record<number, boolean>>({});
  const [direction, setDirection] = useState(0);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [isLightboxImageLoading, setIsLightboxImageLoading] = useState(true);
  const [lightboxDirection, setLightboxDirection] = useState(0);

  const totalImages = images?.length || 0;

  useEffect(() => {
    if (totalImages > 0 && images[currentImageIndex]) {
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
        setDirection(newDirection);
        setCurrentImageIndex(newIndex);
    }
  };

  const selectThumbnail = (index: number) => {
    if (index !== currentImageIndex) {
        setDirection(index > currentImageIndex ? 1 : -1);
        setCurrentImageIndex(index);
    }
  };

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
    setIsLightboxImageLoading(true);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  const paginateLightbox = (newDirection: number) => {
    if (totalImages === 0) return;
    setLightboxDirection(newDirection);
    setLightboxImageIndex((prevIndex) => {
        const newIndex = (prevIndex + newDirection + totalImages) % totalImages;
        setIsLightboxImageLoading(true);
        return newIndex;
    });
  };
  
  useEffect(() => {
    if (isLightboxOpen && images[lightboxImageIndex]) {
        setIsLightboxImageLoading(true);
    }
  }, [lightboxImageIndex, isLightboxOpen, images]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isLightboxOpen) {
        closeLightbox();
      }
      if (isLightboxOpen && totalImages > 1) {
        if (event.key === 'ArrowLeft') {
            paginateLightbox(-1);
        } else if (event.key === 'ArrowRight') {
            paginateLightbox(1);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, closeLightbox, totalImages, paginateLightbox]); 

  const handleLightboxImageLoad = () => setIsLightboxImageLoading(false);
  const handleLightboxImageError = () => {
    setIsLightboxImageLoading(false);
    if (images && images[lightboxImageIndex]) {
      console.warn(`Error al cargar imagen en lightbox: ${images[lightboxImageIndex]}`);
    }
  };

  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%", opacity: 0, scale: 0.98,
    }),
    center: {
      zIndex: 1, x: 0, opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: (direction: number) => ({
      zIndex: 0, x: direction < 0 ? "100%" : "-100%", opacity: 0, scale: 0.98, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    }),
  };
  
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

  return (
    <>
      <div className="mb-8" role="region" aria-labelledby="gallery-title">
        <h2 id="gallery-title" className="sr-only">Galería de imágenes del vehículo</h2>
        
        <div 
            className="relative h-[200px] xxs:h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-muted group cursor-pointer"
            onClick={() => openLightbox(currentImageIndex)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(currentImageIndex);}}
            tabIndex={0}
            aria-label="Abrir galería en pantalla completa"
            role="button"
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout"> 
            <motion.div
              key={currentImageIndex} 
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full" 
            >
              {isCurrentImageLoading && (
                <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />
              )}
              <Image
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={`${altPrefix} ${currentImageIndex + 1} de ${totalImages}`}
                fill
                className={`object-cover transition-opacity duration-150 ${isCurrentImageLoading ? 'opacity-0' : 'opacity-100'}`}
                priority={currentImageIndex === 0} 
                onLoad={handleImageLoad}
                onError={handleImageError}
                sizes="(max-width: 420px) 100vw, (max-width: 520px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 60vw, 66vw" 
              />
            </motion.div>
          </AnimatePresence>

            <div className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                    variant="ghost"
                    size="icon"
                    className="bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 active:bg-black/70"
                    aria-label="Expandir imagen"
                    onClick={(e) => { e.stopPropagation(); openLightbox(currentImageIndex);}}
                >
                    <Expand className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
            </div>

          {totalImages > 1 && (
            <>
              <div className="absolute inset-0 flex items-center justify-between p-1 sm:p-2 z-10 pointer-events-none"> 
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={(e) => { e.stopPropagation(); paginate(-1);}} 
                  className="bg-black/30 hover:bg-black/50 text-white rounded-full pointer-events-auto w-8 h-8 sm:w-10 sm:h-10 active:bg-black/60 focus-visible:bg-black/50" 
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={(e) => { e.stopPropagation(); paginate(1);}}
                  className="bg-black/30 hover:bg-black/50 text-white rounded-full pointer-events-auto w-8 h-8 sm:w-10 sm:h-10 active:bg-black/60 focus-visible:bg-black/50" 
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

        {totalImages > 1 && (
          <div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-1.5 sm:gap-2 mt-2">
            {images.map((imageSrc, index) => (
              <button
                key={`thumb-${index}`}
                onClick={() => selectThumbnail(index)}
                className={`relative aspect-square rounded-md overflow-hidden bg-muted
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1
                            ${currentImageIndex === index ? "ring-2 ring-primary ring-offset-1" : "hover:opacity-75 transition-opacity"}`}
                aria-label={`Ver imagen ${index + 1}`}
                tabIndex={0}
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
                  sizes="80px" 
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent 
          className="p-1 sm:p-2 max-w-none w-screen h-svh bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center border-0 rounded-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          onPointerDownOutside={(e) => e.preventDefault()} 
          onEscapeKeyDown={closeLightbox} 
        >
          <DialogHeader className="sr-only">
            <DialogTitle>Visor de Imágenes del Vehículo</DialogTitle>
            <DialogDescription>
              Navega por las imágenes del vehículo en tamaño completo. Imagen actual {lightboxImageIndex + 1} de {totalImages}.
            </DialogDescription>
          </DialogHeader>
          
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden"> 
            <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="absolute top-3 right-3 md:top-4 md:right-4 z-[60] text-white bg-black/40 hover:bg-black/60 active:bg-black/70 rounded-full w-10 h-10"
                aria-label="Cerrar galería"
            >
                <XIcon className="w-5 h-5" />
            </Button>

            <AnimatePresence initial={false} custom={lightboxDirection} mode="popLayout">
                <motion.div
                    key={`lightbox-${lightboxImageIndex}`} 
                    custom={lightboxDirection}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="relative w-full h-full max-w-[100vw] max-h-[100vh] sm:max-w-[90vw] sm:max-h-[90vh] flex items-center justify-center" 
                >
                    {isLightboxImageLoading && (
                        <Skeleton className="absolute inset-0 w-full h-full bg-gray-700/50" />
                    )}
                    <Image
                        src={images[lightboxImageIndex] || "/placeholder.svg"}
                        alt={`${altPrefix} ${lightboxImageIndex + 1} de ${totalImages} (ampliada)`}
                        fill 
                        className={`object-contain transition-opacity duration-150 ${isLightboxImageLoading ? 'opacity-0' : 'opacity-100'}`}
                        onLoad={handleLightboxImageLoad}
                        onError={handleLightboxImageError}
                        sizes="(max-width: 768px) 100vw, 90vw" 
                    />
                </motion.div>
            </AnimatePresence>

            {totalImages > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {e.stopPropagation(); paginateLightbox(-1);}}
                  className="absolute left-1 xs:left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 bg-black/20 hover:bg-black/40 active:bg-black/50 focus-visible:bg-black/40 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 p-0"
                  aria-label="Imagen anterior en galería"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {e.stopPropagation(); paginateLightbox(1);}}
                  className="absolute right-1 xs:right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 bg-black/20 hover:bg-black/40 active:bg-black/50 focus-visible:bg-black/40 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 p-0"
                  aria-label="Imagen siguiente en galería"
                >
                  <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
                </Button>
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm z-50">
                  {lightboxImageIndex + 1} / {totalImages}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}