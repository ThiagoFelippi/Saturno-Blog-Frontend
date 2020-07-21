// Apollo
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  const bla = token ? `Bearer ${token}` : ""
  return {
    ...headers,
    headers: {
      authorization: bla
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
})

export default client