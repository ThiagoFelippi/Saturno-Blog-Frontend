import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 30px;
  right: 80px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Content = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  #bell{
    color: #918;
    transition: all 0.3s ease-in-out;
  }

  #bell:hover{
    color: #149;
  }
`

export const CounterNotification = styled.div`
  background: #149;
  position: absolute;
  padding: 5px;
  width: 15px;
  height: 15px;
  text-align: center;
  border-radius: 50%;
  color: white;
  top: 0;
  right: 15px;
`

export const Notification = styled.div`
  background: #222;
  padding: 10px;
  width: 200px;
  height: 55px;
  margin-bottom: 3px;
  color: #fff;
  display: flex;
  flex-direction: column;

  h1{
    font-size: 20px;
  }

  p{
    font-size: 15px;
  }

`

export const SeeMore = styled.div`
  background: #222;
  padding: 10px;
  width: 200px;
  height: 25px;
  margin-bottom: 3px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: color 0.4s ease-in-out;
  cursor: pointer;

  &:hover{
    color: #918
  }
`

export const Notifications = styled.div`

`