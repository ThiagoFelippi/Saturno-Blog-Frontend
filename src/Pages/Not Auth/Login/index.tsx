import React, {useEffect, useState} from 'react';

// Router
import { Link } from 'react-router-dom'

// Styles
import { Container, Header, Body, Footer } from './styles';

// Components
import Button from '../../../components/Button'
import Input from '../../../components/Input'

// Apollo
import { gql, useMutation } from '@apollo/client'

interface UserLogin{
  email : string;
  password: string
}

const mutationLogin = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password : $password){
      user{
        name
      }
      token
    }
}
`

const Login: React.FC = () => {
  const [buttonText, setButtonText] = useState("Entrar")
  const [ userInfo, setUserInfo ] = useState<UserLogin>({} as UserLogin)
  const [ addTodo, { data } ] = useMutation(mutationLogin)

  const loginUser = async (e : React.MouseEvent<HTMLButtonElement>) => {
    try{
      e.preventDefault()
      setButtonText("Carregando...")
      const {data} = await addTodo({
        variables: {
          email: userInfo.email,
          password: userInfo.password
        }
      })

      const token = data.login.token
      localStorage.setItem("token", token)

      window.location.href = "/"
    }catch(err){
      // Toastify
      setButtonText("Entrar")
    }
  }

  return (
    <Container>
        <Header>
          <h1> Login </h1>
        </Header>
        <Body>
          <Input change={e => setUserInfo({...userInfo, email: e.target.value})}  placeholder="Digite seu email..." />
          <Input  change={e => setUserInfo({...userInfo, password: e.target.value})}  placeholder="Digite sua senha..." type="password" />
        </Body>
        <Footer>
          <Button text={buttonText} click={e => loginUser(e)} />
          <Link className="register" to="/register"> Caso ainda não tenha uma conta <strong> Crie Uma </strong> </Link>
        </Footer>
    </Container>
  )
}

export default Login;