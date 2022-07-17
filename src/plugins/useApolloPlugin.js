import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://yourservicedomain.com/graphql",
  cache: new InMemoryCache(),
  //headers: {
  //  "Authorization": "Bearer TO_ADD_FOR_TESTING_PURPOSES"
  //}
});

export default apolloClient;
