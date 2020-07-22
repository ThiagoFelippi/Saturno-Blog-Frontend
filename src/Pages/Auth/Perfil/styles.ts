import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 60px;
  left: 0px;
  width: 100%;
  z-index: 1;
  margin: auto;
`

export const AboutMe = styled.div`
  width: 50%;
`

export const Image = styled.img`
  border-radius: 50%;
`

export const Name = styled.h1`
  font-size: 30px;
  margin: 20px;
`

export const Description = styled.p`
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
`

export const SocialMedias = styled.div`
  margin-bottom: 40px;
`

export const Logos = styled.div`
  a{
    margin-left: 40px;
  }
`

export const Posts = styled.div`
  position: absolute;
  top: 100%;
`

export const Config = styled.div`
  position: fixed;
  bottom: 25px;
  right: 50px;
  z-index: 10;

  .icon{
    color: #918;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }

  .icon:hover{
    color: #418;
  }
`

export const  FollowersContent  = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
`

export const  Followers = styled.div`
  h3{
    color: #918;
    margin-bottom: 10px;
  }
` 

export const  Following = styled.div`
  h3{
    color: #918;
    margin-bottom: 10px;
  }
`  