import styled from 'styled-components'

export const Container = styled.div`
  width: 700px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  position: relative;
  box-shadow: 2px 2px 4px #0006;
  margin-top: 60px;
`

export const Content = styled.div`
  width: 60%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  position: relative;
`

export const Title = styled.h3`
  font-size: 30px;
  top: 20px;
  position: absolute;
`

export const Description = styled.p`
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  text-align: center;
`

export const Icons = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85%;
`

export const Author = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-weight: 300;

  .link{
    font-size: 15px;
    color: black;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover{
      font-size: 17px;
    }
  }
`
