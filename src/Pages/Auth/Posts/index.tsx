import React, { useEffect, useState, useContext } from 'react';

import { Container, Posts } from './styles';

// Components
import NavBar from '../../../components/NavBar';
import Post from '../../../components/Post';
import Notifications from '../../../components/Notifications';

// Context
import AppContext from '../../../context/MyContext'

// Apollo
import { gql, useQuery } from '@apollo/client'

const getPosts = gql`
  query getAllPosts{
    getAllPosts{
      id
      title
      user{
        id
        name
      }
    }
  }
`

const Home: React.FC = () => {
  const [posts,setPosts] = useState([])
  const {loading, data} = useQuery(getPosts)

  const { user } = useContext(AppContext)

  useEffect(() => {
    if(data){
      console.log(data.getAllPosts)
      setPosts(data.getAllPosts)
    }
  }, [data])

  return loading ?
    <h1> Loading </h1>
    :
    <>
      <NavBar />
      <Notifications/>
      <Posts>
        {posts.map(post => {
          if(post.user.id === user.id){
            return <Post key={post.id} myPost />
          }
          return <Post key={post.id}  />
        })}
      </Posts>
    </>
}

export default Home;