import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRigth,
  ContainerText,
  PageLink,
  PageLinkExit,
  Line
} from './styles'

export function Header() {
  const navigate = useNavigate()
  const pathname = useLocation().pathname

  function handleClick(rota) {
    navigate(rota)
  }

  const { logout, userData } = useUser()
  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => handleClick('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => handleClick('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRigth>
        <PageLink>
          <img
            onClick={() => handleClick('/carrinho')}
            src={Cart}
            alt="carrinho"
          />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="usuario" />
        </PageLink>
        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRigth>
    </Container>
  )
}
