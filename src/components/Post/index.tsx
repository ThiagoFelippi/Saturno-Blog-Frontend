import React from 'react';

// Router
import { Link } from 'react-router-dom'

// Style
import { Container, Content, Icons, Title, Description, Author } from './styles';

// Icons
import { FaTrash, FaCog } from 'react-icons/fa'

interface Props{
  myPost? : boolean
}

const Post: React.FC<Props> = ({myPost}) => {
  return (
    <Container>
      {
        myPost ?
        <Icons>
          <FaCog color="#918" size={25} />
          <FaTrash color="#918" size={25} />
        </Icons>
        :
        null
      }
      <Content>
        <Title> Título do Post </Title>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, atque. Repudiandae modi, aut aliquam cupiditate eligendi illum error laudantium! Mollitia aspernatur cumque id dignissimos. Quidem nulla laboriosam qui illum? Provident.
        </Description>
      </Content>
      <Author>
        <Link title="Clique para ver o perfil" to="/" className="link" > By: Thiago Crespo </Link>
      </Author>
    </Container>
  )
}

export default Post;