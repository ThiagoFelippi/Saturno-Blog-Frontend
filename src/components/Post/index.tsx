import React, { useState } from 'react';

// Router
import { Link } from 'react-router-dom'

// Style
import { Container, Content, Icons, Title, Description, Author } from './styles';

// Icons
import { FaTrash, FaPen } from 'react-icons/fa'

// Modals
import Modal from './Modals'

interface Author{
  name: string;
  id: number
}

interface Props{
  myPost? : boolean;
  title?: string;
  content?: string;
  author?: Author;
  id?: number;
}

const Post: React.FC<Props> = ({myPost, id, title, content, author}) => {
  const [ modalDelete, setModalDelete ] = useState(false)
  const [ modalEdit, setmodalEdit ] = useState(false)

  return (
    <>
      {
        modalDelete ? <Modal id={id} type="delete" close={() => setModalDelete(false)} /> : null
      }
      {
        modalEdit ? <Modal id={id} opened={modalEdit} type="edit" close={() => setmodalEdit(false)} /> : null
      }
      <Container>
        {
          myPost ?
          <Icons>
            <FaPen onClick={e => setmodalEdit(true)}  color="#918" size={25} />
            <FaTrash onClick={e => setModalDelete(true)} color="#918" size={25} />
          </Icons>
          :
          null
        }
        <Content>
          <Title> {title} </Title>
          <Description>
            {content}
          </Description>
        </Content>
        <Author>
          <Link title="Clique para ver o perfil" to={`/user/${author.id}`} className="link" > By: {author.name} </Link>
        </Author>
      </Container>
    </>
   
  )
}

export default Post;