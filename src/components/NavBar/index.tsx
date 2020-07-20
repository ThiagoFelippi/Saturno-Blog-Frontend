import React from 'react';
import { Link } from 'react-router-dom'

import { Container, List } from './styles';

const NavBar: React.FC = () => {
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
          <Link className="link" to="/perfil"> Meu perfil </Link>
        </List>
      </ul>
    </Container>
  )
}

export default NavBar;