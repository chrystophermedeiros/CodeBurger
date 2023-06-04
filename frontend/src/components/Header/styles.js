import styled from 'styled-components'

export const Container = styled.div`
  background: black;
  height: 72px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  p {
    color: #ffff;
  }
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const ContainerRigth = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`
export const ContainerText = styled.div`
  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #ffff;
  }
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${propos => (propos.isActive ? '#9758a6' : '#ffff')};
  font-weight: ${propos => (propos.isActive ? 'bold' : 'normal')};
  font-size: 16px;
  line-height: 19px;
`

export const PageLinkExit = styled.a`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: #9758a6;
`

export const Line = styled.div`
  height: 40px;
  border-right: 1px solid #9758a6;
`
