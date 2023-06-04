import styled from 'styled-components'

export const Container = styled.div`
  background: black;
  min-height: 100vh;
  width: max-content;
  border-radius: 20px;
  padding: 10px;

  p {
    color: white;
  }
  img {
    height: 120px;
    width: 120px;
    padding: 10px;
  }

  .logo-lixeira {
    width: 60px;
    height: 60px;
    justify-self: center;
    cursor: pointer;
  }
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 10px;
  border-bottom: 1px solid #9758a6;
  margin-bottom: 10px;
  text-align: center;
  p {
    font-size: 20px;
    color: #9758a6;
  }
  align-items: center;
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-bottom: 1px solid #9758a6;
  margin-bottom: 10px;
  text-align: center;
  align-items: center;
  .quantity-container {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;

    button {
      height: 30px;
      background: transparent;
      color: #9758a6;
      border: none;
      font-size: 20px;
      cursor: pointer;
    }
  }
`

export const EmptyCart = styled.p``
