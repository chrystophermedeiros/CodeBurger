import styled from 'styled-components'

export const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    border-radius: 0;
    background-color: #9758a6;
    color: #ffffff;
    border-radius: 50px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }
  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
  }
`

export const CategoryImg = styled.img``

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`

export const Button = styled.button`
  width: 283;
  height: 35px;
  border: none;
  background: #9758a6;
  border-radius: 8px;

  font-weight: 700;
  font-size: 12px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export const Name = styled.p`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  color: #ffffff;
`
export const Price = styled.p`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  color: #ffffff;
`
