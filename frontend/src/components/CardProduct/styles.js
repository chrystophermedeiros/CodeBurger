import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px;
  border: 2px solid #9758a6;
  border-radius: 40px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: max-content;
  }
`

export const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 10px;
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
