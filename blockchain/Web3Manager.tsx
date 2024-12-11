import type { ReactNode } from 'react'
import type { State } from 'wagmi'
import EvmManager from './EVM/EvmManager'

const Web3Manager = ({
  children,
  initialState,
}: {
  children: ReactNode
  initialState?: State
}) => {
  return <EvmManager initialState={initialState}>{children}</EvmManager>
}

export default Web3Manager
