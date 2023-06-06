import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErroMessage } from '../../../components'
import paths from '../../../constants/paths'
import api from '../../../services/api'
import {
  Container,
  Label,
  Input,
  LabelUoload,
  ButtonAdcionar,
  SelectCategories
} from './styles'

function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
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
    control,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async data => {
    const productDataFormDat = new FormData()
    productDataFormDat.append('name', data.name)
    productDataFormDat.append('price', data.price)
    productDataFormDat.append('category_id', data.category.id)
    productDataFormDat.append('file', data.file[0])

    await toast.promise(api.post('products', productDataFormDat), {
      pending: 'Criando novo produto...',
      error: 'Falha ao criar o produto',
      success: 'Produto criado com sucesso'
    })

    setTimeout(() => {
      navigate(paths.Products)
    }, 2000)
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErroMessage>{errors.name?.message}</ErroMessage>
        </div>

        <div>
          <Label>Preço </Label>
          <Input type="number" {...register('price')} />
          <ErroMessage>{errors.price?.message}</ErroMessage>
        </div>

        <div>
          <LabelUoload>
            {fileName || (
              <>
                <CloudUploadIcon />
                Carregue a imagem do produto
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

        <div>
          <Controller
            name="category"
            control={control}
            render={({ field }) => {
              return (
                <SelectCategories
                  {...field}
                  options={categories}
                  getOptionLabel={cat => cat.name}
                  getOptionValue={cat => cat.id}
                  placeholder="Categorias"
                />
              )
            }}
          ></Controller>
          <ErroMessage>{errors.category?.message}</ErroMessage>
        </div>

        <ButtonAdcionar>Adcionar produto</ButtonAdcionar>
      </form>
    </Container>
  )
}
export default NewProduct
