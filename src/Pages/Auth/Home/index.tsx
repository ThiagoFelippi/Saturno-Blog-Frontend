import React from 'react';

import { Container, Header, Content, Title, Description } from './styles';

// Components
import NavBar from '../../../components/NavBar'
import Post from '../../../components/Post'
import Notifications from '../../../components/Notifications'

const Home: React.FC = () => {
  return (
    <>
      <Notifications />
      <Container>
        <NavBar />
        <Header>
          <Title> Blog Saturno </Title>
          <Description>
            Aqui você pode ver os seus posts e o post dos seus amigos
          </Description>
        </Header>
        <Content>
          <Post />
          <Post myPost />
          <Post />
        </Content>
      </Container>
    </>

  )
}

export default Home;