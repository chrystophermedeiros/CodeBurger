import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import ProductsLogo from '../../assets/product-logo.svg'
import { CardProduct } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ProductImg,
  CategoryButton,
  CategoriesMenu,
  ProductdContainer
} from './styles'

export function Products() {
  const { state } = useLocation()

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])
  const [activeCategories, setActiveCategories] = useState(0)

  useEffect(() => {
    if (state && state.categoryId) {
      setActiveCategories(state.categoryId)
    }
  }, [state])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      const newCategories = [{ id: 0, name: 'Todas' }, ...data]
      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products')
      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })
      setProducts(newProducts)
    }
    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategories === 0) {
      setfilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategories
      )
      setfilteredProducts(newFilteredProducts)
    }
  }, [activeCategories, products])

  return (
    <Container>
      <ProductImg src={ProductsLogo} alt="logo dos produtos" />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              isActiveCategory={activeCategories === category.id}
              onClick={() => {
                setActiveCategories(category.id)
              }}
              type="button"
              key={category.id}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
      <ProductdContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductdContainer>
    </Container>
  )
}
