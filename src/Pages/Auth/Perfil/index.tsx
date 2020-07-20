import React from 'react';

// Style
import { Container, Description, Image, Name, AboutMe, SocialMedias, Logos, Network, Posts } from './styles'

// Components
import NavBar from '../../../components/NavBar';
import Post from '../../../components/Post'
import Notifications from '../../../components/Notifications'

// Images
import Perfil from '../../../assets/perfil.jpg'

// Icons
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Notifications />
      <Container>
        <AboutMe>
          <Image src={Perfil} />
          <Name>
            Nome do usuário
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
        <Posts>
          <Post myPost />
          <Post myPost />
          <Post myPost />
        </Posts>
      </Container>
    </>
  )
}

export default Home;