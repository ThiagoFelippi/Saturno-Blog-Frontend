import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  margin-top: 50px;
`

export const Title = styled.h1`
  margin-bottom: 40px;
`

export const TextArea = styled.textarea`
  outline: none;
  resize: none;
  width: 70%;
  height: 100px;
  margin-bottom: 30px;
  border-radius: 30px;
  padding: 25px;
  font-size: 20px;
`