import React from 'react';

import { Container, Content, Header, Posts, Image, Name, Description } from './styles';

// Components
import NavBar from '../../../components/NavBar'

// Image
import Perfil from '../../../assets/perfil.jpg'

const User: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Content>
        <Header>
          <Image src={Perfil} />
          <Name> Thiago Crespo </Name>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe obcaecati laborum, alias dolore delectus nemo iure voluptate mollitia aspernatur excepturi et pariatur cum vel deleniti ipsa a, tempore aut veniam?
          </Description>
        </Header>
        <Posts>

        </Posts>
      </Content>
    </Container>
  )
}

export default User;