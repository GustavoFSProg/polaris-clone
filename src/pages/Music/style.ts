import styled from 'styled-components'
import show3 from '../../assets/show1.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
`
export const Title = styled.h1`
  font-size: 38px;
  color: white;

  @media screen and (max-width: 600px) {
    font-size: 8px;
  }
`

export const Title2 = styled.h1`
  font-size: 38px;
  color: white;
  text-align: center;

  color: lightgray;
  font-size: 65px;
  width: 700px;

  @media screen and (max-width: 600px) {
    font-size: 28px;
    width: 270px;
  }
`

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${show3}) no-repeat;
  background-size: cover;
  background-attachment: fixed;

  width: 100%;
  height: 100vh;
`

export const ContainerImageDois = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`

export const ContainerImageTres = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-size: cover;

  width: 100%;
  height: 100vh;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: black;

  width: 100%;
  height: 260px;
  color: white;
  font-size: 14px;
`
