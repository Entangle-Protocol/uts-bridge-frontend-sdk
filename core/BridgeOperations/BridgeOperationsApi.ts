import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import {
  GET_BRIDGE_OPERATION_BY_TX_HASH,
  GET_BRIDGE_OPERATIONS_BY_SENDER,
  GET_BRIDGE_OPERATIONS_COUNT,
} from '@/core/BridgeOperations/queries'
import { BASE_URL } from '../url'

interface GetBridgeOperationByHash {
  address: string
}

interface GetBridgeOperationsCount {
  address: string
}

export const bridgeOperationsApi = createApi({
  reducerPath: 'BridgeOperationsApi',
  baseQuery: graphqlRequestBaseQuery({
    url: BASE_URL || '',
  }),
  tagTypes: ['BridgeOperations'],
  endpoints: (builder) => ({
    getBridgeOperationByTxHash: builder.query({
      query: ({ address }: GetBridgeOperationByHash) => ({
        document: GET_BRIDGE_OPERATION_BY_TX_HASH,
        variables: { address },
      }),
    }),
    getBridgeOperationBySender: builder.query({
      query: ({ address }: GetBridgeOperationByHash) => ({
        document: GET_BRIDGE_OPERATIONS_BY_SENDER,
        variables: { address },
      }),
    }),
    getBridgeOperationsCount: builder.query({
      query: ({ address }: GetBridgeOperationsCount) => ({
        document: GET_BRIDGE_OPERATIONS_COUNT,
        variables: { address },
        providesTags: ['BridgeOperationSingle'],
      }),
    }),
  }),
})

export const {
  useGetBridgeOperationByTxHashQuery,
  useLazyGetBridgeOperationByTxHashQuery,
  useGetBridgeOperationsCountQuery,
  useGetBridgeOperationBySenderQuery,
} = bridgeOperationsApi
