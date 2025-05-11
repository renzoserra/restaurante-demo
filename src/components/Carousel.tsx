import '../styles/Carousel.css'
import { useEffect, useRef, useState } from 'react'
import plato1 from '../../public/assets/carruselPhotos/Promo40C.webp'
import plato2 from '../../public/assets/carruselPhotos/YasaitameCamaron.webp'
import plato3 from '../../public/assets/carruselPhotos/CostillarBBQ.webp'
import plato4 from '../../public/assets/carruselPhotos/CevicheMaki.webp'
import plato5 from '../../public/assets/carruselPhotos/CevicheNikkei.webp'
import plato6 from '../../public/assets/carruselPhotos/MakiPasion.webp'
import plato7 from '../../public/assets/carruselPhotos/TiraditoSalmon.webp'




const images = [
  {
    src: plato1,
    alt: 'Promo 40 Cortes',
    caption: 'Promo 40 Cortes',
  },
  {
    src: plato2,
    alt: 'Yasaitame Camarón',
    caption: 'Yasaitame Camarón',
  },
  {
    src: plato3,
    alt: 'Costillar BBQ',
    caption: 'Costillar BBQ',
  },
  {
    src: plato4,
    alt: 'Ceviche Maki',
    caption: 'Ceviche Maki',
  },
  {
    src: plato5,
    alt: 'Ceviche Nikkei',
    caption: 'Ceviche Nikkei',
  },
  {
    src: plato6,
    alt: 'Maki Pasión',
    caption: 'Maki Pasión',
  },
  {
    src: plato7,
    alt: 'Tiradito de Salmón',
    caption: 'Tiradito de Salmón',
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
    const track = trackRef.current;
    if (!track) return;
  
    let startX: number | null = null;
  
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };
  
    const handleTouchEnd = (e: TouchEvent) => {
      if (startX === null) return;
  
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
  
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // swipe izquierda
          setIndex((prev) => (prev + 1) % images.length);
        } else {
          // swipe derecha
          setIndex((prev) => (prev - 1 + images.length) % images.length);
        }
      }
      startX = null;
    };
  
    track.addEventListener('touchstart', handleTouchStart);
    track.addEventListener('touchend', handleTouchEnd);
  
    return () => {
      track.removeEventListener('touchstart', handleTouchStart);
      track.removeEventListener('touchend', handleTouchEnd);
    };
  }, [images.length]);
  

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div className="carousel-track"  ref={trackRef}
  style={{ transform: `translateX(-${index * 100}%)` }}>
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