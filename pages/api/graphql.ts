import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://twitter-v1-1-v2-api.p.rapidapi.com/graphql"
  }),
  cache: new InMemoryCache()
});

export default client;


