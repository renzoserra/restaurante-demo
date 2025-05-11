import '../styles/Carousel.css'
import { useEffect, useRef, useState } from 'react'
import plato1 from '../../public/assets/carruselPhotos/AcevichadoMaki.webp'
import plato2 from '../../public/assets/carruselPhotos/CamaronesTempura.webp'
import plato3 from '../../public/assets/carruselPhotos/Costillarbbq.webp'
import plato4 from '../../public/assets/carruselPhotos/AlitasBufalo.webp'
import plato5 from '../../public/assets/carruselPhotos/FuriMaki.webp'
import plato6 from '../../public/assets/carruselPhotos/TartarSalmon.webp'
import plato7 from '../../public/assets/carruselPhotos/TiradoSalmon.webp'
import plato8 from '../../public/assets/carruselPhotos/yakimeshi.webp'
import plato9 from '../../public/assets/carruselPhotos/YakiSoba.webp'
import plato10 from '../../public/assets/carruselPhotos/YasaitamePollo.webp'



const images = [
  {
    src: plato1,
    alt: 'Acevichado Maki',
    caption: 'Acevichado Maki',
  },
  {
    src: plato2,
    alt: 'Camarones Tempura',
    caption: 'Camarones Tempura',
  },
  {
    src: plato3,
    alt: 'Costillar BBQ',
    caption: 'Costillar BBQ',
  },
  {
    src: plato4,
    alt: 'Alitas Búfalo',
    caption: 'Alitas Búfalo',
  },
  {
    src: plato5,
    alt: 'Furi Maki',
    caption: 'Furi Maki',
  },
  {
    src: plato6,
    alt: 'Tartar Salmón',
    caption: 'Tartar de Salmón',
  },
  {
    src: plato7,
    alt: 'Tiradito Salmón',
    caption: 'Tiradito de Salmón',
  },
  {
    src: plato8,
    alt: 'Yakimeshi',
    caption: 'Yakimeshi',
  },
  {
    src: plato9,
    alt: 'Yakisoba',
    caption: 'Yakisoba',
  },
  {
    src: plato10,
    alt: 'Yasaitame de Pollo',
    caption: 'Yasaitame de Pollo',
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