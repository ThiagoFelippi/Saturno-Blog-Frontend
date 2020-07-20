import React from 'react';

import { Container, Posts } from './styles';

// Components
import NavBar from '../../../components/NavBar';
import Post from '../../../components/Post';
import Notifications from '../../../components/Notifications';

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Notifications/>
      <Posts>
        <Post />
        <Post myPost />
        <Post />
        <Post myPost />
      </Posts>
    </>
  )
}

export default Home;