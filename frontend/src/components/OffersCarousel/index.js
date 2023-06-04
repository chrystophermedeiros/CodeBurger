import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'

import Offers from '../../assets/ofertas.png'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  CategoryImg,
  ContainerItens,
  Image,
  Button,
  Name,
  Price
} from './style'

export function OffersCarousel() {
  const [offers, setOffers] = useState([])
  const { putProductsInCart } = useCart()
  const navigate = useNavigate()
  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')

      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })
      setOffers(onlyOffers)
    }
    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]
  return (
    <Container>
      <CategoryImg src={Offers} alt="Logo da categoria" />
      <Carousel
        itemsToShow={4}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(product => (
            <ContainerItens key={product.id}>
              <Image src={product.url} alt="foto do produto em oferta" />
              <Name>{product.name}</Name>
              <Price>{product.formatedPrice}</Price>
              <Button
                onClick={() => {
                  putProductsInCart(product)
                  navigate('/carrinho')
                }}
              >
                Peça agora
              </Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
