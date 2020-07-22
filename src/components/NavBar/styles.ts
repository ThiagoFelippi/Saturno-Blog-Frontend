import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding: 20px;
  background: #222;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  z-index: 4;
`;

export const List = styled.li`
  list-style: none;
  margin-bottom: 40px;

  .link {
    color: white;
    text-decoration: none;

    transition: all 0.2s ease-in;

    &:hover{
      color: #918
    }
  }
`
