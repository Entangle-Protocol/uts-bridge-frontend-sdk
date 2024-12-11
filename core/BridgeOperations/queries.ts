import { gql } from '@apollo/client'

export const BRIDGE_OPERATIONS_LISTENER = gql(`
  subscription BridgeOperationsListener($address:String!) {
    common_bridge_operations(
      where: {
        _or: [
          { sender: { _eq: $address } },
          { recipient: { _eq: $address } },
          { metadata: { _contains: { additional_account: $address } } }
        ]
      }
      order_by: { created_at: desc }
    ) {
      amount
      arrived_at
      bridge_protocol
      created_at
      dst_chain_id
      dst_tx_hash
      metadata
      id
      sender
      src_chain_id
      src_tx_hash
      status
      token
      updated_at
      recipient
    }
  }
`)

export const GET_BRIDGE_OPERATION_BY_TX_HASH = gql(`
query GetBridgeOperationsByTxHas($address:String!) {
    common_bridge_operations(
      where: { src_tx_hash: { _eq: $address } }
      order_by: { created_at: desc }
    ) {
      amount
      arrived_at
      bridge_protocol
      created_at
      dst_chain_id
      dst_tx_hash
      metadata
      id
      sender
      src_chain_id
      src_tx_hash
      status
      token
      updated_at
      recipient
    }
}`)
export const GET_BRIDGE_OPERATIONS_BY_SENDER = gql(`
query GetBridgeOperationsBySender($address:String!) {
    common_bridge_operations(
        where: {
            sender: { _eq: $address }
        }
    ) {
      amount
      arrived_at
      bridge_protocol
      created_at
      dst_chain_id
      dst_tx_hash
      metadata
      id
      sender
      src_chain_id
      src_tx_hash
      status
      token
      updated_at
      recipient
    }
}`)

export const GET_BRIDGE_OPERATIONS_COUNT = gql(`
  query GetBridgeOperationsCount($address:String!) {
    common_bridge_operations_aggregate(where: { sender:{_eq:$address}}) {
      aggregate {
        count
      }
    }
  }
`)
