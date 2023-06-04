import styled from 'styled-components'

export const Container = styled.div`
  background: black;
  color: white;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #9758a6;

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      'title title'
      'itens itens-price'
      'delivery-taxa delivery-taxa-price';

    .title {
      grid-area: title;
      margin-bottom: 20px;
      border-bottom: 1px solid #9758a6;
    }
    .itens {
      grid-area: itens;
    }
    .itens-price {
      grid-area: itens-price;
    }
    .delivery-taxa {
      grid-area: delivery-taxa;
    }
    .delivery-taxa-price {
      grid-area: delivery-taxa-price;
    }
  }

  .container-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
    font-size: 24px;
    border-bottom: 1px solid #9758a6;
  }
`
