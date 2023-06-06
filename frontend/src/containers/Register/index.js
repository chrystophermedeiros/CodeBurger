import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Logo from '../../assets/logo.svg'
import RegisterImg from '../../assets/register-image.svg'
import { Button, ErroMessage } from '../../components'
import api from '../../services/api'
import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SingInLink
} from './styles'

export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail valido!')
      .required('O e-mail é obrigatorio'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digitos!'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatória')
      .oneOf([Yup.ref('password')], ' As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        {
          validateStatus: () => true
        }
      )
      if (status === 201 || status === 200) {
        toast.success('cadastro realizado com sucesso!', {})
      } else if (status === 409) {
        toast.error('E-mail já cadastrado! Faça login pra continuar', {})
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falaha no sistema! tente novamente!', {})
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="Tela de Registro" />
      <ContainerItens>
        <img src={Logo} />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErroMessage>{errors.name?.message}</ErroMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErroMessage>{errors.email?.message}</ErroMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErroMessage>{errors.password?.message}</ErroMessage>

          <Label error={errors.confirmPassword?.message}>Confirma senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErroMessage>{errors.confirmPassword?.message}</ErroMessage>

          <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }}>
            Sign Up
          </Button>
        </form>
        <SingInLink>
          Já possui conta?{' '}
          <Link style={{ color: 'white' }} to="/login">
            Sign In
          </Link>
        </SingInLink>
      </ContainerItens>
    </Container>
  )
}
