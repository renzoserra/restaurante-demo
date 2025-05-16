import React from 'react'
import '../styles/productcard.css'

type Props = {
  name: string
  description?: string
  price: number
  image: string
}

export default function ProductCard({ name, description, price, image }: Props) {
  return (
    <article className="product-card">
      <div className="info">
        <h3>{name}</h3>
        {description && <p className="description">{description}</p>}
        <p className="price">${price.toLocaleString()}</p>
      </div>
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
    </article>
  )
}
