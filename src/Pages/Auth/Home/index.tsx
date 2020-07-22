import React, {useState, useEffect} from 'react';

import { Container, Header, Content, Title, Description } from './styles';

// Components
import NavBar from '../../../components/NavBar'
import Post from '../../../components/Post'
import Notifications from '../../../components/Notifications'

// Apollo
import { gql, useQuery } from '@apollo/client'

interface IFollower{
  followerId : number
  followingId : number
}

const getfollowings = gql`
  query getfollowings{
    seeFollowings{
      followingId
    }
  }
`


const Home: React.FC = () => {
  const [ followings, setFollowings ] = useState<IFollower[]>([])
  const { loading, data } = useQuery(getfollowings)

  useEffect(() => {
    if(data){
      setFollowings(data.seeFollowings)
    }
  }, [data])

  return loading ?
    <h1> Loading... </h1>
    :
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
}

export default Home;