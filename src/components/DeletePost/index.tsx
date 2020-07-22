import React from 'react';

// Styles
import { Container, Content, CloseModal, Close } from './styles';

// Components
import Button from '../Button'

// Icons
import { MdClose } from 'react-icons/md'

// Apollo
import { useMutation, gql } from '@apollo/client'

// Toastify 
import createToast from '../../services/createToast'

interface Props {
  close: () => void;
  id? : number
}

const deletePost = gql`
  mutation postDeleted($id: Int!){
    deletePost(id: $id)
  }
`

const DeletePost: React.FC<Props> = ({close, id}) => {
  const [ postDeleted, {data} ]= useMutation(deletePost) 

  const handleDeletePost = async () => {
    try{
      await postDeleted({
        variables: {
          id
        }
      })
      close()
      createToast("success", "Post deletado com sucesso")
    }catch(err){
      console.log(err)
      createToast("error", "Erro ao deletar post")
    }
    
  }

  return (
    <Container>
      <Close onClick={close} />
      <Content>
        <CloseModal onClick={close}>
          <MdClose size={30} color="#fff" />
        </CloseModal>
        <h1> Deseja menos apagar esse post? </h1>
        <br/>
        <Button click={handleDeletePost} text="Apagar" />
      </Content>
    </Container>
  )
}

export default DeletePost;