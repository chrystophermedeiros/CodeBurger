import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container } from './styles'

export function CartResumo() {
  const [finalprice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cartProducts } = useCart()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
  }, [cartProducts])

  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Realizando o seu pedido...',
      success: 'Pedido realizado com sucesso',
      error: 'Falha ao tentar realizar o  seu pedido, tente novamente'
    })
  }

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="itens">Itens:</p>
          <p className="itens-price">{formatCurrency(finalprice)}</p>
          <p className="delivery-taxa">Taxa de entrega:</p>
          <p className="delivery-taxa-price">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-button">
          <p className="total">Total</p>
          <p className="total-price">
            {formatCurrency(finalprice + deliveryTax)}
          </p>
        </div>
      </Container>
      <Button
        onClick={submitOrder}
        style={{ width: '100%', marginTop: '30px' }}
      >
        Finalizar pedido
      </Button>
    </div>
  )
}
