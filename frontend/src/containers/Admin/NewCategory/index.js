import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErroMessage } from '../../../components'
import paths from '../../../constants/paths'
import api from '../../../services/api'
import { Container, Label, Input, LabelUoload, ButtonAdcionar } from './styles'

function NewCategory() {
  const [fileName, setFileName] = useState(null)
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    file: Yup.mixed()
      .test('requerid', 'Carregue a imagem', value => {
        return value?.length > 0
      })
      .test('filesize', 'Carregue arquivos de até 2mb', value => {
        return value[0]?.size <= 2000000
      })
      .test('type', 'Carregue apenas arquivos JPEG', value => {
        return value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
      })
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async data => {
    const productDataFormDat = new FormData()
    productDataFormDat.append('name', data.name)
    productDataFormDat.append('file', data.file[0])

    await toast.promise(api.post('categories', productDataFormDat), {
      pending: 'Criando nova categoria...',
      error: 'Falha ao criar categoria',
      success: 'Categoria criada com sucesso'
    })

    setTimeout(() => {
      navigate(paths.NewCategory)
    }, 2000)
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErroMessage>{errors.name?.message}</ErroMessage>
        </div>

        <div>
          <LabelUoload>
            {fileName || (
              <>
                <CloudUploadIcon />
                Carregue a imagem da categoria
              </>
            )}
            <input
              type="file"
              accept="image/png, image/jpg"
              {...register('file')}
              onChange={value => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </LabelUoload>
          <ErroMessage>{errors.file?.message}</ErroMessage>
        </div>

        <ButtonAdcionar>Adcionar categoria</ButtonAdcionar>
      </form>
    </Container>
  )
}
export default NewCategory
