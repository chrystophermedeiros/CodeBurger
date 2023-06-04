import React from 'react'

import { SideMenuAdmin } from '../../components'
import ListProduct from './LisProducts'
import Orders from './Orders'
import { Container, ContainerItens } from './styles'

export function Admin() {
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItens>
        {/* <Orders /> */}
        <ListProduct />
      </ContainerItens>
    </Container>
  )
}
