import React from 'react';
import CreateGlobalStyle from './styles/globalStyle'

// Router
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// Components

// Toastify
import 'react-toastify/dist/ReactToastify.css';

// Pages
// Not Auth
import Login from './Pages/Not Auth/Login'
import Register from './Pages/Not Auth/Register'

// Auth
import Home from './Pages/Auth/Home'
import Posts from './Pages/Auth/Posts'
import Perfil from './Pages/Auth/Perfil'
import Config from './Pages/Auth/Config'
import User from './Pages/Auth/User'

// Context
import {ContextComponent} from './context/MyContext'

interface Props{
  component: React.FC;
  path: string;
  exact? : boolean
}

const PrivateRoute: React.FC<Props> = ({component: Component, path, exact}) => {
  const token = localStorage.getItem("token")

  return token ? 
  <Route component={Component} path={path} exact={exact} />
  :
  <Redirect to="/login" />
}

const NotAuthRoute: React.FC<Props> = ({component: Component, path, exact}) => {
  const token = localStorage.getItem("token")

  return token ? 
  <Redirect to="/" />
  :
  <Route component={Component} path={path} exact={exact} />
}

function Routes() {
  return (
    <ContextComponent>
      <CreateGlobalStyle/>
      <Router>
        <Switch>
          <PrivateRoute component={Home} path="/" exact />
          <PrivateRoute component={Posts} path="/posts" />
          <PrivateRoute component={Config} path="/config" />
          <PrivateRoute component={Perfil} path="/user" />
          {/* Not auth  */}
          <NotAuthRoute component={Login} path="/login" />
          <NotAuthRoute component={Register} path="/register" />
        </Switch>
      </Router>
    </ContextComponent>
   
  );
}

export default Routes;
