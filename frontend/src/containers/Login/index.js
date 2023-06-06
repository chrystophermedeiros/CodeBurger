import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import { Button, ErroMessage } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SingInLink
} from './styles'

export function Login() {
  const history = useNavigate()
  const { putUserData } = useUser()
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail valido!')
      .required('O e-mail é obrigatorio'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digitos!')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo 👌',
        error: 'Verifique seu e-mail e senha 🤯'
      }
    )

    putUserData(data)

    setTimeout(() => {
      if (data.admin) {
        history('/pedidos')
      } else {
        history('/')
      }
    }, 1000)
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="Imagem de login" />
      <ContainerItens>
        <img src={Logo} />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErroMessage>{errors.email?.message}</ErroMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErroMessage>{errors.password?.message}</ErroMessage>

          <Button type="submit" style={{ marginTop: 75, marginBottom: 55 }}>
            Sign In
          </Button>
        </form>
        <SingInLink>
          Não possui conta?{' '}
          <Link style={{ color: 'white' }} to="/cadastro">
            Sign Up
          </Link>
        </SingInLink>
      </ContainerItens>
    </Container>
  )
}
