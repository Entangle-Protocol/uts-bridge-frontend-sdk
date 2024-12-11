import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { GET_ACCOUNT_NAME } from '@/core/Account/graphQl/queries'

interface GetAccountName {
  address: string
  network: string
}

export const accountGraphQlApi = createApi({
  reducerPath: 'AccountGraphQlApi',
  baseQuery: graphqlRequestBaseQuery({
    url: process.env.NEXT_PUBLIC_BASE_MESSAGES_URL || '',
  }),
  tagTypes: ['Account'],
  endpoints: (builder) => ({
    getAccountName: builder.query({
      query: ({ address, network }: GetAccountName) => ({
        document: GET_ACCOUNT_NAME,
        variables: { address, network },
      }),
    }),
  }),
})

export const { useGetAccountNameQuery } = accountGraphQlApi
