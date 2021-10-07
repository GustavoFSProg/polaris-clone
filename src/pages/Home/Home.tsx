import { Link } from 'react-router-dom'
import {
  Container,
  ContainerImage,
  Footer,
  ContainerImageTres,
  ContainerImageDois,
  Title,
  Title2,
} from './style'

function Home() {
  return (
    <Container>
      <ContainerImage>
        <Link to="/music" style={{ color: 'white', fontSize: '20px' }}>
          Music
        </Link>
        <Title>Dominus Fatua</Title>
      </ContainerImage>
      <ContainerImageDois>
        <Title2>TURNÊ MELTDOWN 2017</Title2>

        <a
          href="http://www.jogoscello.com"
          style={{
            color: 'white',
            height: '35px',
            width: '190px',
            background: 'transparent',
            border: '2px solid white',
            fontSize: '15px',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none',
            // marginTop: '150px',
          }}
        >
          Ver Site do Evento
        </a>
      </ContainerImageDois>
      <ContainerImageTres>
        <Title>Show</Title>
      </ContainerImageTres>
      <Footer>Desenvolvido por Gustavo Sohne</Footer>
    </Container>
  )
}

export default Home
