'use client';

import { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

interface ImageLightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageLightbox({ src, alt, isOpen, onClose }: ImageLightboxProps) {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setRotation(0);
    }
  }, [isOpen, src]);

  if (!isOpen) return null;

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));
  const handleRotate = () => setRotation((prev) => prev + 90);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close lightbox"
      >
        <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 md:px-4 py-2">
        <button
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            handleZoomOut();
          }}
          aria-label="Zoom out"
          disabled={scale <= 0.5}
        >
          <ZoomOut className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </button>
        <span className="text-white text-xs md:text-sm font-mono min-w-[2.5rem] md:min-w-[3rem] text-center">
          {Math.round(scale * 100)}%
        </span>
        <button
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            handleZoomIn();
          }}
          aria-label="Zoom in"
          disabled={scale >= 3}
        >
          <ZoomIn className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </button>
        <div className="w-px h-4 md:h-6 bg-white/20 mx-2" />
        <button
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            handleRotate();
          }}
          aria-label="Rotate image"
        >
          <RotateCw className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </button>
      </div>

      <div
        className="w-full h-full overflow-auto flex items-center justify-center p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          style={{
            transform: `scale(${scale}) rotate(${rotation}deg)`,
            transition: 'transform 0.2s ease-out',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          className="object-contain"
        />
      </div>
    </div>
  );
}

interface LightboxImageProps {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

export function LightboxImage({ src, alt, className, children }: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={className}
        onClick={() => setIsOpen(true)}
        aria-label={`View larger: ${alt}`}
      >
        {children}
      </button>
      <ImageLightbox src={src} alt={alt} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
