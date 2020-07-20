import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

import { ApolloProvider } from "@apollo/client"
import client from './services/api';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
