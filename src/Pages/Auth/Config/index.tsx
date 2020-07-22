import React, {useContext, useState, useEffect} from 'react';

// Styles
import { Container, Content, Body, Title, TextArea } from './styles';

// Components
import NavBar from '../../../components/NavBar'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

// Context
import AppContext from '../../../context/MyContext'

// Apollo
import { useMutation, gql } from '@apollo/client'

// Toast
import createToast from '../../../services/createToast'

interface UserInfo{
  name: string;
  description?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
}

const UpdateUserById = gql`
  mutation updateUserById($name: String, $description: String, $github: String, $linkedin: String, $instagram: String ){
    updateUserById(data: {
      name: $name,
      description: $description,
      github: $github,
      linkedin: $linkedin,
      instagram: $instagram
    })
  }
`

const Config: React.FC = () => {
  const [ userInfos, setUserInfo ] = useState<UserInfo>({} as UserInfo )
  const { loading, user } = useContext(AppContext)
  const [ updateUser ] = useMutation(UpdateUserById)

  useEffect(() => {
    if(user){
      setUserInfo({
        name: user.name,
        description: user.description,
        linkedin: user.linkedin,
        github: user.github,
        instagram: user.instagram
      })
    }
  }, [user])

  const handleUpdateUser = async () => {
    try{
      const update = await updateUser({
        variables: {
          name: `${userInfos.name}`,
          description: `${userInfos.description}`,
          linkedin: `${userInfos.linkedin}`,
          github: `${userInfos.github}`,
          instagram: `${userInfos.instagram}`
        }
      })
  
      if(update){
        return createToast("success", "Usuário atualizado com sucesso")
      }
  
      createToast("error", "Erro ao atualizar usuário")
    }catch(err){
      console.log(err)
    }

  }

  // Validation
  // https://www.instagram.com/
  // https://www.linkedin.com/in/
  // https://github.com
  
  return loading?
    <h1> Loading... </h1>
    :
    <>
      <NavBar />
      <Container>
        <Content>
          <Body>
            <Title> Seja Bem vindo, Thiago </Title>
            <Input change={(e : React.ChangeEvent<HTMLInputElement>) => setUserInfo({...userInfos, name : e.target.value})} value={userInfos.name} placeholder="Digite o nome do usuário que quer por" />
            <TextArea onChange={(e : React.ChangeEvent<HTMLTextAreaElement>) => setUserInfo({...userInfos, description : e.target.value})} value={userInfos.description} placeholder="Fale um pouco sobre você..." />
            <Input change={(e : React.ChangeEvent<HTMLInputElement>) => setUserInfo({...userInfos, linkedin : e.target.value})} value={userInfos.linkedin} placeholder="Link do seu linkedin" />
            <Input change={(e : React.ChangeEvent<HTMLInputElement>) => setUserInfo({...userInfos, github : e.target.value})} value={userInfos.github} placeholder="Link do seu github" />
            <Input change={(e : React.ChangeEvent<HTMLInputElement>) => setUserInfo({...userInfos, instagram : e.target.value})} value={userInfos.instagram} placeholder="Link do seu instagram" />
            <Button click={() => handleUpdateUser()} text="Atualizar perfil" />
          </Body>
        </Content>
      </Container>
    </>
}

export default Config;