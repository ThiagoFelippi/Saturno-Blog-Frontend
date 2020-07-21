import React, { useState } from 'react';

// Styles
import { Container, Modal, CloseModal, Close, Header, Body, Footer, Title, ContentPost } from './styles';

// Icons
import { MdClose } from 'react-icons/md'

// Components
import Button from '../Button'
import Input from '../Input'

interface Props{
  opened?: boolean;
  click?: () => void;
}

interface PostInfo{
  title: string;
  content: string;
}

const ModalComponent: React.FC<Props> = ({opened, click}) => {
  const [ postInfos, setPostInfos ] = useState<PostInfo>({} as PostInfo)

  const handleCreatePost = (e : React.MouseEvent<HTMLButtonElement>) => {
    console.log(postInfos)
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