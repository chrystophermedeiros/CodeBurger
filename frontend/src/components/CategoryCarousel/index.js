import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/categorias.png'
import api from '../../services/api'
import { Container, CategoryImg } from './style'

function CategoryCarousel() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      setCategories(data)
    }
    loadCategories()
  }, [])
  return (
    <Container>
      <CategoryImg src={Category} alt="Logo da categoria" />
      <Carousel itemsToShow={4} style={{ width: '90%' }}>
        {categories &&
          categories.map(category => (
            <div key={category.id}>
              <img src={category.url} alt="foro da categoria" />
              <button>{category.name}</button>
            </div>
          ))}
      </Carousel>
    </Container>
  )
}
export default CategoryCarousel
