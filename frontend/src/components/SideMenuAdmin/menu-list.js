import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import CategoryIcon from '@mui/icons-material/Category'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import paths from '../../constants/paths'

const lisLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: ShoppingBagIcon
  },
  {
    id: 2,
    label: 'Listar produtos',
    link: paths.Products,
    icon: ShoppingCartIcon
  },
  {
    id: 3,
    label: 'Novo produto',
    link: paths.NewProdcut,
    icon: AddShoppingCartIcon
  },

  {
    id: 4,
    label: 'Nova categoria',
    link: paths.NewCategory,
    icon: CategoryIcon
  }
]

export default lisLinks
