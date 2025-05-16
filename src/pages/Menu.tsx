import React, { useEffect, useState } from 'react'
import HeaderMenu from '../components/HeaderMenu'
import SearchBar from '../components/SearchBar'
import CategoryTabs from '../components/CategoryTabs'
import ProductCard from '../components/ProductCard'
import logo from '../../public/assets/logoClear.webp';

import productsJson from '../data/products.json'
import categories from '../data/categories.json'

import '../styles/menu.css'

type Product = {
  id: string
  name: string
  description?: string
  price: number
  image: string
  category: string
}

export default function Menu() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('nuevos-productos')
  const [searchTerm, setSearchTerm] = useState<string>('')

useEffect(() => {
  const loaded = productsJson.map(p => ({
    ...p,
    category: p.category.trim().toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-'),
image: p.image?.trim() ? p.image : '/images/logoClear.webp'
  }))

  setProducts(loaded)
}, [])

const groupedProducts = [...categories]
  .sort((a, b) => a.order - b.order)
  .map(category => ({
    ...category,
    products: products.filter(p =>
      p.category === category.id &&
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }))

  return (
    <>
      <HeaderMenu />

      <main className="menu-container">
        <SearchBar onSearch={(query) => setSearchTerm(query)} />

<CategoryTabs
  selected={selectedCategory}
  onSelectCategory={(catId) => {
    setSelectedCategory(catId)
    setSearchTerm('')

    // Scroll suave a la categoría correspondiente
    const target = document.getElementById(catId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }}
/>

<section className="product-grid">
  {groupedProducts.map(category =>
    category.products.length > 0 && (
      <div key={category.id} id={category.id} className="category-group">
        <h2 className="category-title">{category.label}</h2>
        <div className="products-row">
          {category.products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    )
  )}

  {/* Si no hay productos en ninguna categoría */}
  {groupedProducts.every(group => group.products.length === 0) && (
    <p style={{ padding: '2rem', textAlign: 'center' }}>
      No se encontraron productos para esta búsqueda.
    </p>
  )}
</section>
      </main>
    </>
  )
}
