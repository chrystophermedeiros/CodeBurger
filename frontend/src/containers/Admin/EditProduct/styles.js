import Select from 'react-select'
import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    background-color: black;
    border: 1px solid white;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`

export const Label = styled.p`
  color: #ffff;
  margin-bottom: 4px;
`
export const Input = styled.input`
  height: 30px;
  width: 100%;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  min-width: 280px;
`

export const ButtonAdcionar = styled(Button)`
  margin-top: 30px;
  width: 100%;
`

export const LabelUoload = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px dashed #ffff;
  border-radius: 5px;
  padding: 10px;

  gap: 10px;

  input {
    opacity: 0;
    width: 1px;
    border-radius: 5px;
  }
`

export const SelectCategories = styled(Select)`
  color: #ffff;
  background-color: black;
  .css-1nmdiq5-menu {
    color: #ffff;
    background-color: black;
    border: 1px solid white;
  }
  .css-1xc3v61-indicatorContainer {
    color: #ffff;
    background-color: black;
    border: 1px solid white;
  }
`

export const ContainerInpput = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;

  input {
    cursor: pointer;
  }
`
