import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../'
import { useCart } from '../../hooks/CartContext'
import { Container, Image, Price, Name } from './styles'

export function CardProduct({ product }) {
  const { putProductsInCart } = useCart(product)
  const navigate = useNavigate()
  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <div>
        <Name>{product.name}</Name>
        <Price>{product.formatedPrice}</Price>
        <Button
          onClick={() => {
            putProductsInCart(product)
            navigate('/carrinho')
          }}
        >
          Adcionar
        </Button>
      </div>
    </Container>
  )
}

CardProduct.prototype = {
  product: PropTypes.object
}
