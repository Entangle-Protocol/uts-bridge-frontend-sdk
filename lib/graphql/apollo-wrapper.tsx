'use client'

import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  SuspenseCache,
} from '@apollo/client'

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT

const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
})

const suspenseCache = new SuspenseCache()

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloProvider client={client} suspenseCache={suspenseCache}>
      {children}
    </ApolloProvider>
  )
}
