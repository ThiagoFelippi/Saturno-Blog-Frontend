import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #0007;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 300px;
  height: 100px;
  background: #fff;
  padding: 25px;
  border-radius: 25px;
  box-shadow: 2px 2px 4px #0006;
  text-align: center;
  color: #918;
  position: relative;
`

export const CloseModal = styled.div`
  width: 50px;
  height: 50px;
  background: #918;
  border-radius: 50%;
  position: absolute;
  top: -20px;
  right: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const Close = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
`