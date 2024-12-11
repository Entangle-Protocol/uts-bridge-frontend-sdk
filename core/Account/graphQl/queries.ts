import { gql } from '@apollo/client'

export const GET_ACCOUNT_NAME = gql(`
  query GetAccountName($address: String!, $network: String!) {
    account: user_account(where: { _and: { address: { _eq: $address }, network: { _ilike: $network } } }) {
      name
    }
  }
`)
