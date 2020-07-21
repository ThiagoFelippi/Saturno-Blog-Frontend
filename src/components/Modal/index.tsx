import React, { useState, useEffect } from 'react';

// Styles
import { Container, Modal, CloseModal, Close, Header, Body, Footer, Title, ContentPost } from './styles';

// Icons
import { MdClose } from 'react-icons/md'

// Apollo
import { useMutation, gql } from '@apollo/client'

// Components
import Button from '../Button'
import Input from '../Input'

// Yup
import * as yup from 'yup'

// Toastify 
import createToast from '../../services/createToast'

interface Props{
  opened?: boolean;
  click?: () => void;
}

interface PostInfo{
  title: string;
  content: string;
}

const createPost = gql`
  mutation createPost($title: String!, $content: String!){
    createPost(data: {
      title: $title,
      content: $content
    }){
      title
    }
  }
`

const ModalComponent: React.FC<Props> = ({opened, click}) => {
  const [ postInfos, setPostInfos ] = useState<PostInfo>({} as PostInfo)

  const [ postCreated, { data, error } ] = useMutation(createPost)

  const validate = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required().min(20),
  })

  const handleCreatePost = async (e : React.MouseEvent<HTMLButtonElement>) => {
    try{
      const isValid = await validate.isValid({
        title: postInfos.title,
        content: postInfos.content
      })
      console.log(isValid)
      if(isValid){
        const post = await postCreated({
          variables: {
            title: `${postInfos.title}`,
            content: `${postInfos.content}`
          }
        })
        // Toastify de criado e fecha modal
      }

      createToast("error", "Erro ao criar post, lembre que o conteúdo deve ter no mínimo 20 caracteres e o título 5")
    
    }
    catch(err){
      // Toastify mostando o erro
      console.log(err)
    }
  }

  return opened?
    <Container>
      <Close onClick={click} />
      <Modal>
        <CloseModal onClick={click}>
            <MdClose size={30} color="#fff" />
        </CloseModal>
        <Header>
          <Title> Crie um Post </Title>
          <hr/>
        </Header>
        <Body>
          <Input change={e => setPostInfos({...postInfos, title: e.target.value})} placeholder="Digite o título do seu post..." required /> 
          <ContentPost onChange={e => setPostInfos({...postInfos, content: e.target.value})} placeholder="Digite o conteúdo do seu post..." maxLength={200} required />
        </Body>
        <Footer>
          <Button click={e => handleCreatePost(e)} text="Criar Post" />
        </Footer>
      </Modal>
    </Container>
    :
    null
}

export default ModalComponent;