import React, { useEffect, useState } from 'react'
import '../styles/categories.css'
import categories from '../data/categories.json'

type Props = {
  selected: string
  onSelectCategory: (id: string) => void
}

type Category = {
  id: string
  label: string
  icon: string
  order: number
}

export default function CategoryTabs({ selected, onSelectCategory }: Props) {
  const [categoryList, setCategoryList] = useState<Category[]>([])

  useEffect(() => {
    const sorted = [...(categories as Category[])].sort((a, b) => a.order - b.order)
    setCategoryList(sorted)
  }, [])

  return (
    <section className="categories-section">
      <div className="category-pills-container">
        {categoryList.map((cat) => (
          <div
            key={cat.id}
            className={`category-pill ${selected === cat.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            <div className="icon-wrapper">
              <i className={cat.icon} aria-hidden="true"></i>
            </div>
            <span>{cat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
