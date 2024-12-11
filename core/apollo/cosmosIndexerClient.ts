import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'
import { EXPLORER_OVERVIEW_GRAPHQL_URL } from '@/core/url'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'

const httpLink = new HttpLink({
  uri: EXPLORER_OVERVIEW_GRAPHQL_URL as string,
})

const wsLink = new GraphQLWsLink(
  createClient({
    url: EXPLORER_OVERVIEW_GRAPHQL_URL as string,
  })
)

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  },
  wsLink,
  httpLink
)

export const apolloClientCosmosIndexer = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
})
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
