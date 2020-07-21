import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Close = styled.div`
  background: #0006;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  cursor: pointer;
`

export const Modal = styled.div`
  width: 60%;
  height: 70%;
  background: #fff;
  border-radius: 40px;
  padding: 50px;
  box-shadow: 1px 1px 4px #0007;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const CloseModal = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: #918;
  position: absolute;
  top: -20px;
  right: -20px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
`

export const Header = styled.div`
  position: absolute;
  top: 20px;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`

export const Footer = styled.div`
  width: 80%;
  position: absolute;
  bottom: 30px;
  display: flex;
  justify-content: center;
`

export const Title = styled.h1`
  margin-bottom: 30px;
`

export const ContentPost = styled.textarea`
  width: 90%;
  height: 150px;
  border-radius: 30px;
  padding: 25px;
  font-size: 20px;
  font-weight: 300;
  resize: none;
  outline: none;
`