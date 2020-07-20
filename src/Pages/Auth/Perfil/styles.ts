import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  width: 70%;
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
`

export const SocialMedias = styled.div`
  margin-bottom: 40px;
`

export const Logos = styled.div`
  a{
    margin-left: 40px;
  }
`

export const Network = styled.img`

`

export const Posts = styled.div`
  position: absolute;
  top: 100%;
`