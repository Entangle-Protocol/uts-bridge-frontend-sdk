import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'
import { BASE_URL } from '@/core/url'
import { defaultOptions } from '@/core/utils/appoloDefaultOptions'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'

const httpLink = new HttpLink({
  uri: BASE_URL as string,
})

const wsLink = new GraphQLWsLink(
  createClient({
    url: BASE_URL as string,
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

export const apolloClientCcmIndexer = new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions,
  link: splitLink,
})

export const serverApolloClientCcmIndexer = new ApolloClient({
  uri: BASE_URL,
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
    uri: BASE_URL,
  }),
})
