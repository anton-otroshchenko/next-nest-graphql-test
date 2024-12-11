import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

console.log(process.env)

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.HOST_URL}/graphql`,
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache(),
});

export default client;
