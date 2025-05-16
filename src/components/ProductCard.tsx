import React from 'react';
import '../styles/productcard.css';

type Props = {
  name: string;
  description?: string;
  price: number;
  image: string;
};

export default function ProductCard({ name, description, price, image }: Props) {
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const fallback = `${import.meta.env.BASE_URL}images/logoClear.webp`;

  if (!e.currentTarget.dataset.fallbackApplied) {
    e.currentTarget.src = fallback;
    e.currentTarget.dataset.fallbackApplied = 'true';
  }
};

  return (
    <article className="product-card">
      <div className="info">
        <h3>{name}</h3>
        {description && <p className="description">{description}</p>}
        <p className="price">${price.toLocaleString()}</p>
      </div>
      <div className="image-container">
        <img src={image} alt={name} onError={handleImageError} />
      </div>
    </article>
  );
}
