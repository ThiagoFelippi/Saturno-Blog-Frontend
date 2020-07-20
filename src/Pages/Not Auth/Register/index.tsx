import React from 'react';

// Routes
import { Link } from 'react-router-dom'

// Styles
import { Container, Header, Body, Footer } from './styles';

// Components
import Button from '../../../components/Button'
import Input from '../../../components/Input'

const Login: React.FC = () => {
  return (
    <Container>
        <Header>
          <h1> Registre-se </h1>
        </Header>
        <Body>
          <Input change={e => console.log("Oi")}  placeholder="Digite seu nome..." />
          <Input change={e => console.log("Oi")}  placeholder="Digite seu email..." />
          <Input change={e => console.log("Oi")}  placeholder="Digite sua senha..." type="password" />
        </Body>
        <Footer>
          <Button text="Registrar" />
          <Link className="register" to="/register"> Caso já tenha uma conta <strong> Clique Aqui </strong> </Link>
        </Footer>
    </Container>
  )
}

export default Login;