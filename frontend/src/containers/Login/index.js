import React from 'react'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  Button,
  SingInLink
} from './styles'

function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} alt="Imagem de login" />
      <ContainerItens>
        <img src={Logo} />
        <h1>Login</h1>

        <Label>Email</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>Sign In</Button>

        <SingInLink>
          Não possui conta? <a>Sign Up</a>
        </SingInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
