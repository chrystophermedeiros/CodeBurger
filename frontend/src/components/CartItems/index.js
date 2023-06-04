import React from 'react'

import ImgLixeira from '../../assets/lixeira.png'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Header, Body, EmptyCart } from './styles'

export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts, deleteProducts } =
    useCart()
  return (
    <Container>
      <Header>
        <p>Imagem Ilustrativa</p>
        <p>Itens</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
        <p>Remover</p>
      </Header>

      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseProducts(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>

            <p>{formatCurrency(product.quantity * product.price)}</p>
            <img
              className="logo-lixeira"
              onClick={() => deleteProducts(product.id)}
              src={ImgLixeira}
            />
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho Vazio</EmptyCart>
      )}
    </Container>
  )
}
