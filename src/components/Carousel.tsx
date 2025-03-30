import '../styles/Carousel.css'
import { useEffect, useState } from 'react'

const images = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
]

export default function Carousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="carousel">
      <img src={images[index]} alt={`Slide ${index}`} className="carousel-img" />
    </section>
  )
}
