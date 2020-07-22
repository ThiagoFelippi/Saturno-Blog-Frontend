import React, {useContext, useEffect, useState} from 'react';

// Style
import { Container, Description, Image, Name, AboutMe, SocialMedias, Logos, Posts, Config, FollowersContent, Followers, Following } from './styles'

// Components
import NavBar from '../../../components/NavBar';
import Post from '../../../components/Post'
import Notifications from '../../../components/Notifications'
import CreatePost from '../../../components/CreatePost'

// Images
import Perfil from '../../../assets/perfil.jpg'

// Icons
import { FaInstagram, FaGithub, FaLinkedinIn, FaUserCog } from 'react-icons/fa'

// Context
import AppContext from '../../../context/MyContext'

// Apollo
import { useQuery, gql } from '@apollo/client'

const getFollowers = gql`
  query getFollowers($id: Int!){
    seeFollowers(id: $id){
      followerId
    }

    seeFollowings(id: $id){
      followingId
    }
  }
`

const getUserById = gql`
  query getUserById($id: Int!){
    getUserById(id: $id){
      id
      name
      email
      description
      instagram
      linkedin
      github
    
      follower{
        followerId
        followingId
      }

      post{
        title
        content
      }
    }
  }
`
      

interface FollowersData{
  followerId: number;
  followingId: number;
}

interface IPost{
  title: string;
  content: string;
}

interface IUser{
  id: number;
  name: string;
  email: string;
  description: string;
  linkedin: string;
  github: string;
  instagram: string;
  post: IPost[]
}

const Home: React.FC = () => {
  const id = Number(window.location.href.split("/user/")[1])
  
  const { user, loading } = useContext(AppContext)
  const followersData = useQuery(getFollowers, {
    variables: {
      id
    }
  }).data
  const userById = useQuery(getUserById, {
    variables: {
      id
    }
  }).data
  const [ userInfos, setUserInfos ] = useState<IUser>({} as IUser)
  const [ posts, setPosts ] = useState([])
  const [ followers, setFollowers ] = useState<any[]>([])

  useEffect(() => {
    if(followersData && userById){
      setPosts(userById.getUserById.post)
      const followingArray = followersData.seeFollowings.map((f: FollowersData) => f.followingId)
      const followerArray = followersData.seeFollowers.map((f: FollowersData) => f.followerId)
      const followingAndFollowerArray = [
        {
          type: "Followings",
          followings: followingArray
        },
        {
          type: "Followers",
          followers: followerArray
        }
      ]
      setFollowers(followingAndFollowerArray)
      setUserInfos(userById.getUserById)
    }

  }, [followersData, userById])

  const countFollowers = () => {
    if(followers[1]){
      const followersC = followers[1].followers
      const followerCount = followersC.map((f : any) => f)
      return followerCount.length
    }
  }

  const countFollowings = () => {
    if(followers[0]){
      const followings = followers[0].followings
      const followingCount = followings.map((f : number) => f)
      return followingCount.length
    }
  }

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
            {userInfos.name}
          </Name>
          <Description>
            {userInfos.description}
          </Description>
        <SocialMedias>
          <Logos>
            {/* Logos here, when user take mouse inside increase size  */}
            <a href={userInfos.instagram} target="_blanck" > <FaInstagram size={60} /> </a>
            <a href={userInfos.linkedin} target="_blanck" > <FaLinkedinIn size={60} />  </a>
            <a href={userInfos.github} target="_blanck" > <FaGithub size={60} />  </a>
          </Logos>
        </SocialMedias>
        <FollowersContent>
          <Followers>
              <h3> Seguidores :</h3>
              <strong> {countFollowers()} </strong>
          </Followers>
          <Following>
              <h3> Seguindo :</h3>
              <strong> {countFollowings()} </strong>
          </Following>
        </FollowersContent>
        <hr/>
        </AboutMe>
        {
            userInfos.id === user.id ?
            <CreatePost />
            :
            null
        }
        <Posts>
          {
            !posts.length?
            <>
              <br/>
              <h1> Esse usuário ainda não possui posts </h1>
            </>
            :
            <>
            {
              posts.map((post) => (
                <Post author={{id: userInfos.id, name: userInfos.name}} id={post.id} key={post.id} title={post.title} content={post.content} myPost />
              ))
            }
            </>
          }
        </Posts>
      </Container>
      {
        userInfos.id === user.id ?
        <Config>
          <FaUserCog onClick={() => window.location.href = "/config"} className="icon" size={50}  />
        </Config>
        :
        null
      }
    
    </>
}

export default Home;