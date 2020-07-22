import React, { useState } from 'react';

// Styles
import { Container, Content, CounterNotification, Notification, SeeMore, Notifications } from './styles';

// Icons
import { FaBell } from 'react-icons/fa'

interface Notification{
  title: "Post" | "Curtida";
  description: string;
}

const NotificationsComponent: React.FC = () => {
  const [ showNotification, setShowNotification ] = useState(true)
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      title: "Post",
      description: "Seu amigo João postou uma foto"
    },
    {
      title: "Post",
      description: "Seu amigo Cleber postou uma foto"
    }
  ])

  return (
    <Container>
      <Content>
        <CounterNotification> 5 </CounterNotification>
        <FaBell onClick={() => setShowNotification(!showNotification)} id="bell" size={30} />
      </Content>
      {
      showNotification ?
       <Notifications>
       {notifications.map(notification => (
         <Notification>
           <h1> {notification.title} </h1>
           <p> {notification.description} </p>
         </Notification>
        ))}
        <SeeMore>
          Ver mais...
        </SeeMore>
        </Notifications>
        :
        null
      }
     
    </Container>
  )
}

export default NotificationsComponent;