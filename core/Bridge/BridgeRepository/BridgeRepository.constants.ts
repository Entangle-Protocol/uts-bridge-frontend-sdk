import { gql } from '@apollo/client'

export const GET_TRANSACTION_STATUS = gql`
  query GetTransactionStatus(
    $txHash: String!
    $destChainId: numeric!
    $sourceChainId: numeric!
  ) {
    bridge(
      arg1: { dst_chain_id: $destChainId, src_chain_id: $sourceChainId, tx_hash: $txHash }
    ) {
      address_from
      created_at
      failed
      id
      operation_one_hash
      operation_one_tx_hash
      operation_two_hash
      operation_two_tx_hash
      src_hash
      step
      updated_at
    }
  }
`
