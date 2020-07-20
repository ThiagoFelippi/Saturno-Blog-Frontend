import React, { useState } from 'react';

// Styles
import { Container, Content, CounterNotification, Notification, SeeMore } from './styles';

// Icons
import { FaBell } from 'react-icons/fa'

interface Notification{
  title: "Post" | "Curtida";
  description: string;
}

const NotificationsComponent: React.FC = () => {
  const [notification, setNotifications] = useState<Notification[]>([
    {
      title: "Post",
      description: "Seu amigo postou uma foto"
    },
    {
      title: "Post",
      description: "Seu amigo postou uma foto"
    }
  ])

  return (
    <Container>
      <Content>
        <CounterNotification> 5 </CounterNotification>
        <FaBell id="bell" size={30} />
      </Content>
      <Notification>
        <h1> Curtida </h1>
        <p> Seu amigo Roberto postou uma foto</p>
      </Notification>
      <Notification>
        <h1> Curtida </h1>
        <p> Seu amigo Roberto postou uma foto</p>
      </Notification>
      <Notification>
        <h1> Curtida </h1>
        <p> Seu amigo Roberto postou uma foto</p>
      </Notification>
      <SeeMore>
        Ver mais...
      </SeeMore>
    </Container>
  )
}

export default NotificationsComponent;