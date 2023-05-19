import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import { Container, HomeImg } from './styles'

function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="HomeLogoBurger" />
      <CategoryCarousel />
    </Container>
  )
}
export default Home
