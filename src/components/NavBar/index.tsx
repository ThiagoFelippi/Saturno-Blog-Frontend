import React, {useContext} from 'react';
import { Link } from 'react-router-dom'

import { Container, List } from './styles';

// Context
import AppContext from '../../context/MyContext'

const NavBar: React.FC = () => {
  const { user } = useContext(AppContext)

  return (
    <Container>
      <ul>
        <List>
          <Link className="link" to="/"> Home </Link>
        </List>
        <List>
          <Link className="link" to="/posts"> Posts </Link>
        </List>
        <List>
          <Link className="link" to={`/user/${user.id}`}> Meu perfil </Link>
        </List>
      </ul>
    </Container>
  )
}

export default NavBar;