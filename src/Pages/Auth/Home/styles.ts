import styled from 'styled-components';

export const Container = styled.div`
  width: 100vh;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  align-items: center;
`;

export const Header = styled.div`
  background: #222;
  color: white;
  padding: 25px;
  border-radius: 20px;
  width: 65%;
`;


export const Title = styled.h1`
  font-size: 40px;
`;

export const Description = styled.div`
  font-size: 18px;
  color: white;
  margin-top: 15px;
`;

export const Content = styled.div`
  position: absolute;
  top: 160px;
`;
