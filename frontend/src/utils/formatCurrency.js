const formatCurrency = value => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRl'
  }).format(value)
}

export default formatCurrency
