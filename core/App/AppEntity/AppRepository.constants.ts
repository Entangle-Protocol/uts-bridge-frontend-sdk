import { gql } from '@apollo/client'

export const GET_GLOBAL_CONFIG = gql`
  query GetFrontendConfig($id: Int!) {
    frontend_configs_by_pk(id: $id) {
      id
      config
    }
  }
`
