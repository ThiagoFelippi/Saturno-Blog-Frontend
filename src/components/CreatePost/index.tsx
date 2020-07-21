import React, { useState } from 'react';
import ReactDOM from 'react-dom'

// Styles
import { Container } from './styles';

// Components
import Modal from '../Modal'

const CreatePost: React.FC = () => {
  const [ opened, setOpened ] = useState(false)
  return (
    <>
        {
          ReactDOM.createPortal(
            <Modal opened={opened} click={() => setOpened(opened ? false : true)} />,
            document.getElementById("modal-root")
          )
        }
      <Container onClick={() => setOpened(true)}>
        Criar um Post
      </Container>
    </>
  )
}

export default CreatePost;