import React from 'react'
import '../styles/searchbar.css'

type Props = {
  onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: Props) {
  return (
    <section className="search-section">
      <div className="search-bar">
        <i className="fas fa-search" aria-hidden="true"></i>
        <input
          type="search"
          placeholder="Buscar productos por nombre"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </section>
  )
}
