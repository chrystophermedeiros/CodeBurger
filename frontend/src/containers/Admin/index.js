import React from 'react'
import { useLocation } from 'react-router-dom'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import EditProduct from './EditProduct'
import ListProduct from './LisProducts'
import NewCategory from './NewCategory'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { Container, ContainerItens } from './styles'

export function Admin() {
  const location = useLocation()
  return (
    <Container>
      <SideMenuAdmin path={location.pathname} />
      <ContainerItens>
        {location.pathname === paths.Order && <Orders />}
        {location.pathname === paths.Products && <ListProduct />}
        {location.pathname === paths.NewProdcut && <NewProduct />}
        {location.pathname === paths.EditProducts && <EditProduct />}
        {location.pathname === paths.NewCategory && <NewCategory />}
      </ContainerItens>
    </Container>
  )
}
