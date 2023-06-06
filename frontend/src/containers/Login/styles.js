import styled from 'styled-components'

import Fundo from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Fundo}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 70%;
`

export const ContainerItens = styled.div`
  background: black;
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-top: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 16px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`
export const Label = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 3px;

  color: #ffffff;
`
export const Input = styled.input`
  margin-bottom: 10px;
  width: 391.42px;
  height: 38.32px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  padding-left: 10px;
`

export const SingInLink = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
