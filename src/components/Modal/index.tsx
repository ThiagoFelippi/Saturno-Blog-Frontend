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

interface PostInfo{
  id?: number;
  title: string;
  content: string;
}

interface Props{
  close: () => void;
  opened?: boolean;
  value? : PostInfo;
  type? : string;
}

const createPost = gql`
  mutation createPost($id: Int!, $title: String!, $content: String!){
    createPost(id: $id, data: {
      title: $title,
      content: $content
    }){
      title
    }
  }
`
const postEdit = gql`
   mutation updatePostById($id: Int!, $title: String!, $content: String!){
    updatePostById(id: $id, data: {
      title: $title,
      content: $content
    })
  }
`

const ModalComponent: React.FC<Props> = ({opened, close, value, type}) => {
  const [ postInfos, setPostInfos ] = useState<PostInfo>({} as PostInfo)
  const [ postCreated, { data, error } ] = useMutation(createPost)
  const [ editPostById ] = useMutation(postEdit)

  useEffect(() => {
    setPostInfos({
      id: value.id,
      title: value.title,
      content: value.content
    })
  }, [value.content, value.id, value.title])

  const validate = yup.object().shape({
    title: yup.string().required().max(26),
    content: yup.string().required().min(20),
  }, [])

  const handleCreateOrEditPost = async (e : React.MouseEvent<HTMLButtonElement>) => {
    if(type === "edit"){
      const handleEditPost = async (e : React.MouseEvent<HTMLButtonElement>) => {
        try{
          const isValid = await validate.isValid({
            title: postInfos.title,
            content: postInfos.content
          })
          if(isValid){
            const post = await editPostById({
              variables: {
                id: postInfos.id,
                title: `${postInfos.title}`,
                content: `${postInfos.content}`
              }
            })
            close()
            return createToast("warning", "Post atualizado com sucesso")
          }
          // Mudar as mensagem do toastify e apresentar regras para as postagens
          createToast("error", "Erro ao atualizar o post")
        
        }catch(err){
          createToast("error", "Erro ao atualizar post, tente novamente mais tarde")
        }
      }
      handleEditPost(e)
    }else{
      const handleCreatePost = async (e : React.MouseEvent<HTMLButtonElement>) => {
        try{
          const isValid = await validate.isValid({
            title: postInfos.title,
            content: postInfos.content
          })
          if(isValid){
            const post = await postCreated({
              variables: {
                id: 1,
                title: `${postInfos.title}`,
                content: `${postInfos.content}`
              }
            })
            close()
            return createToast("success", "Post criado com sucesso")
          }
          // Mudar as mensagem do toastify e apresentar regras para as postagens
          createToast("error", "Erro ao criar post, lembre que o conteúdo deve ter no mínimo 20 caracteres e o título 5")
        
        }
        catch(err){
          createToast("error", "Erro ao criar post, tente novamente mais tarde")
        }
      }
      handleCreatePost(e)
    }
  }



  return opened?
    <Container>
      <Close onClick={close} />
      <Modal>
        <CloseModal onClick={close}>
            <MdClose size={30} color="#fff" />
        </CloseModal>
        <Header>
          <Title> Crie um Post </Title>
          <hr/>
        </Header>
        <Body>
          <Input value={postInfos.title} change={e => setPostInfos({...postInfos, title: e.target.value})} placeholder="Digite o título do seu post..." required /> 
          <ContentPost onChange={e => setPostInfos({...postInfos, content: e.target.value})} placeholder="Digite o conteúdo do seu post..." maxLength={200} required value={postInfos.content} />
        </Body>
        <Footer>
          <Button click={e => handleCreateOrEditPost(e)} text="Criar Post" />
        </Footer>
      </Modal>
    </Container>
    :
    null
}

export default ModalComponent;