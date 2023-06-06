import Select from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: black;
  min-height: 100vh;
  width: 100%;
  .MuiSvgIcon-root {
    color: white;
  }
`

export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;
`
export const LinkMenu = styled.a`
  cursor: pointer;
  font-weight: ${props => (props.isActiveStatus ? 'bold' : '400')};
  font-size: ${props => (props.isActiveStatus ? '20px' : 'normal')};
  border-bottom: ${props => (props.isActiveStatus ? '1px solid' : 'none')};
  color: ${props => (props.isActiveStatus ? '#9758d8' : '#323D5D')};
`

export const ProductImg = styled.img`
  width: 60px;
  border-radius: 5px;
`

export const ReactSelectStyle = styled(Select)`
  width: 200px;
  .css-1fdsijx-ValueContainer {
    cursor: pointer;
  }
`
