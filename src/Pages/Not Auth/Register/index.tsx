import React, {useState} from 'react';

// Routes
import { Link } from 'react-router-dom'

// Styles
import { Container, Header, Body, Footer } from './styles';

// Components
import Button from '../../../components/Button'
import Input from '../../../components/Input'

// Apollo
import { gql, useMutation } from '@apollo/client'

interface UserRegister{
  name: string;
  email : string;
  password: string;
}

const mutationLogin = gql`
  mutation login($name: String!, $email: String!, $password: String!) {
    createUser(data: {
      name: $name,
      email: $email,
      password: $password,
    }){
      email
    }
}
`

const Login: React.FC = () => {
  const [buttonText, setButtonText] = useState("Registrar")
  const [ userInfo, setUserInfo ] = useState<UserRegister>({} as UserRegister)
  const [ register, { data } ] = useMutation(mutationLogin)

  const registerUser = async (e : React.MouseEvent<HTMLButtonElement>) => {
    try{
      e.preventDefault()
      setButtonText("Carregando...")
      console.log(userInfo)
      const {data} = await register({
        variables: {
          name: userInfo.name,
          email: userInfo.email,
          password: userInfo.password
        }
      })

      window.location.href = "/login/?login=success"
    }catch(err){
      // Toastify
      setButtonText("Entrar")
      console.log(err)
    }
  }
  
  return (
    <Container>
        <Header>
          <h1> Registre-se </h1>
        </Header>
        <Body>
          <Input change={e => setUserInfo({...userInfo, name: e.target.value})}  placeholder="Digite seu nome..." />
          <Input change={e => setUserInfo({...userInfo, email: e.target.value})}  placeholder="Digite seu email..." />
          <Input change={e => setUserInfo({...userInfo, password: e.target.value})}  placeholder="Digite sua senha..." type="password" />
        </Body>
        <Footer>
          <Button click={e => registerUser(e)} text="Registrar" />
          <Link className="register" to="/register"> Caso já tenha uma conta <strong> Clique Aqui </strong> </Link>
        </Footer>
    </Container>
  )
}

export default Login;