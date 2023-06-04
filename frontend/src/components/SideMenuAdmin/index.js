import LogoutIcon from '@mui/icons-material/Logout'
import React from 'react'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, LinkList } from './styles'

export function SideMenuAdmin() {
  const { logout } = useUser
  return (
    <Container>
      <hr />
      {listLinks.map(item => (
        <ItemContainer key={item.id} isActive={true}>
          <item.icon className="icon" />
          <LinkList to={item.link}>{item.label}</LinkList>
        </ItemContainer>
      ))}
      <hr />
      <ItemContainer>
        <LogoutIcon />
        <LinkList to="/login" onClick={logout}>
          Sair
        </LinkList>
      </ItemContainer>
    </Container>
  )
}
