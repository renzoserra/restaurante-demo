import '../styles/Carousel.css'
import { useEffect, useRef, useState } from 'react'

const images = [
  '/assets/carruselPhotos/plato1.jpg',
  '/assets/carruselPhotos/plato2.jpg',
  '/assets/carruselPhotos/plato3.jpg',
  '/assets/carruselPhotos/plato4.jpg'

    // Puedes seguir agregando más imágenes aquí
]

export default function Carousel() {
  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  // Auto-avance
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [images.length])

  // Cuando cambia el índice, desplazamos el track
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${index * 100}%)`
    }
  }, [index])

  return (
    <div className="carousel-container">
      <div className="carousel-track" ref={trackRef}>
        {images.map((src, i) => (
          <div className="carousel-slide" key={i}>
            <img src={src} alt={`Plato ${i + 1}`} />
          </div>
        ))}
      </div>

      {/* Indicadores tipo Instagram */}
      <div className="carousel-indicators">
        {images.map((_, i) => (
          <button
            key={i}
            className={`indicator-dot ${index === i ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          ></button>
        ))}
      </div>
    </div>
  )
}