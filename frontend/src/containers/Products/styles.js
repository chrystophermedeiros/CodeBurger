import styled from 'styled-components'

export const Container = styled.div`
  background-color: black;
  min-height: calc(100vh - 72px);
`

export const ProductImg = styled.img`
  width: 100vw; /* 100% da largura da tela */
  height: 50vh;
  object-fit: cover;
  object-position: bottom;
`

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`

export const CategoryButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  gap: 20px;
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758A6'};
  padding-bottom: 3px;
  color: ${props => (props.isActiveCategory ? '#9758A6' : '#9A9A9D')};
`

export const ProductdContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 40px;
  justify-items: center;
  background-color: black;
`
