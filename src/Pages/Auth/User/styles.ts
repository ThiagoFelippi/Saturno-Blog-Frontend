import styled from 'styled-components';


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


export const Content = styled.div`
  position: relative;
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
  width: 70%;
  margin: auto;
`


export const Header = styled.div`
  position: absolute;
  top: 35px;
`;

export const Posts = styled.div`
  
`;
