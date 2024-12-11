import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { EXPLORER_OVERVIEW_GRAPHQL_URL } from '@/core/url'

export const serverApolloClientCosmosIndexer = new ApolloClient({
  uri: EXPLORER_OVERVIEW_GRAPHQL_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  },
  link: new HttpLink({
    uri: EXPLORER_OVERVIEW_GRAPHQL_URL,
  }),
})
