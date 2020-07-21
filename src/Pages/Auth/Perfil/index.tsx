import React, {useContext, useEffect, useState} from 'react';

// Style
import { Container, Description, Image, Name, AboutMe, SocialMedias, Logos, Network, Posts } from './styles'

// Components
import NavBar from '../../../components/NavBar';
import Post from '../../../components/Post'
import Notifications from '../../../components/Notifications'
import CreatePost from '../../../components/CreatePost'

// Images
import Perfil from '../../../assets/perfil.jpg'

// Icons
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'

// Context
import AppContext from '../../../context/MyContext'

// Apollo
import { useQuery, gql } from '@apollo/client'

// Get posts
const getPostByUserId = gql`
  query getPostByUserId{
    getPostByUserId{
      id
      title
      content
    }
  }
`
const Home: React.FC = () => {
  const { user, loading } = useContext(AppContext)
  const {error, data} = useQuery(getPostByUserId)
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    if(data){
      setPosts(data.getPostByUserId)
    }

  }, [data, posts])

  return loading?
    <h1> Loading... </h1>
    :
    <>
      <NavBar />
      <Notifications />
      <Container>
        <AboutMe>
          <Image src={Perfil} />
          <Name>
            {user.name}
          </Name>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam odit, nesciunt consectetur ducimus sunt quasi facere voluptatem officiis iste deleniti tempora fugit eius quis harum cumque rerum necessitatibus, aspernatur asperiores.
          </Description>
        <SocialMedias>
          <Logos>
            {/* Logos here, when user take mouse inside increase size  */}
            <a href="https://www.instagram.com/thiago_felippi1/?hl=pt-br" target="_blanck" > <FaInstagram size={60} /> </a>
            <a href="https://www.linkedin.com/in/thiago-crespo-felippi/" target="_blanck" > <FaLinkedinIn size={60} />  </a>
            <a href="https://github.com/ThiagoFelippi" target="_blanck" > <FaGithub size={60} />  </a>
          </Logos>
        </SocialMedias>
        <hr/>
        </AboutMe>
        <CreatePost />
        <Posts>
          {
            !!error?
            <>
              <br/>
              <h1> Esse usuário ainda não possui posts </h1>
            </>
            :
            <>
            {
              posts.map((post) => (
                <Post id={post.id} key={post.id} title={post.title} content={post.content} myPost />
              ))
            }
            </>
          }
        </Posts>
      </Container>
    </>
}

export default Home;