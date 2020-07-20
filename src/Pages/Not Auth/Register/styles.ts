import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 500px;
  background: #222;
  position: relative;
  border-radius: 30px;
  box-shadow: 2px 2px 4px #0006;
`;

export const Header = styled.div`
  position: absolute;
  top: 20px;
  color: white;
  padding: 20px;
  font-size: 20px;

  h1{
    font-weight: 300;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 30px;
  width: 100%;

  .register{
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease-in-out; 
  
    &:hover{
      color: #918;
    }

    strong{
      text-decoration: underline;
    }
  }
`;