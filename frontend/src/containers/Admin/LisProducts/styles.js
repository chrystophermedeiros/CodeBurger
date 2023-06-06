import EditIcon from '@mui/icons-material/Edit'
import styled from 'styled-components'

export const Container = styled.div`
  background: black;
  width: 80vw;
  .MuiTable-root {
    background-color: black;
  }
  .MuiTableCell-root {
    color: white;
  }
`

export const ProductImg = styled.img`
  width: 60px;
`

export const Button = styled(EditIcon)`
  color: #9758a6;
  cursor: pointer;
`
