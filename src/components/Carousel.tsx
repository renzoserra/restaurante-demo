import '../styles/Carousel.css'
import { useEffect, useRef, useState } from 'react'
import plato1 from '../../public/assets/carruselPhotos/plato1.jpg'
import plato2 from '../../public/assets/carruselPhotos/plato2.jpg'
import plato3 from '../../public/assets/carruselPhotos/plato3.jpg'
import plato4 from '../../public/assets/carruselPhotos/plato4.jpg'

// Puedes seguir agregando más imágenes aquí
// const images = [plato1, plato2, plato3, plato4]
const images = [
  {
    src: plato1,
    alt: 'Tiradito Nikkei',
    caption: 'Tiradito Nikkei',
  },
  {
    src: plato2,
    alt: 'Makis Furai',
    caption: 'Plato 2',
  },
  {
    src: plato3,
    alt: 'Makis Furai',
    caption: 'Plato 3',
  },
  {
    src: plato4,
    alt: 'Makis Furai',
    caption: 'Plato 4',
  },
];

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
    <section className="carousel-section">
      <div className="carousel-container">
        <div className="carousel-track" ref={trackRef}>
          {images.map((img, index) => (
            <div className="carousel-slide" key={index}>
              <div className="carousel-image-wrapper">
                <img src={img.src} alt={img.alt} className="carousel-image" />
                <div className="carousel-caption">{img.caption}</div>
              </div>
            </div>
          ))}
        </div>

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
    </section>
  );
}