import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { BridgeInteractor } from '../BridgeInteractor'
import type { txHash } from '@/core/Bridge/BridgeRepository'
import type { TOperation } from '@/containers/Bridge/BridgeSidebar/BridgeOperations'
import type { WalletClient } from 'viem'

export interface IApproveTransferPayload {
  from: string
  to: string
  chainIdTo: number
  chainIdFrom: number
  chainIdToHex: string
  amount: string
  isUnwrap: boolean
  signer: WalletClient | undefined
  senderAddress?: string
  contractAddress: string
  tokenFrom: string
  cctp: boolean
  tokenMessenger: string
}

export interface TransactionStatusResponse {
  address_from: string
  created_at: string
  failed: boolean
  id: number
  operation_one_hash: string
  operation_one_tx_hash: string
  operation_two_hash: string
  operation_two_tx_hash: string
  src_hash: string
  step: string
  updated_at: string
}

export interface ITokenState {
  from: string
  to: string
}

export interface IChainState {
  from: number
  to: number
}

export interface BridgeOperationParams {
  txHash: `0x${string}` | null
  dstTxHash: `0x${string}` | null
  sourceChainId: number | string | null
  destChainId: number | string | null
  tokenFrom: string | null
  tokenTo: string | null
  timestamp: number | null
  arrivedAt?: number | null
  sent: string | null
  willReceive: number | null
  protocol: number | null
  metadata?: TOperation['metadata']
  status: string
  sender: string
  recipient: string
}

export interface IBridgeEntityState {
  commission: {
    value: {
      executionFeePercent: number
      networkFee: string
    }
    loading: string
  }
  bridgeLoading: string
  claimLoading: boolean
  approveRequestOpen: boolean
  balances: {
    [address: string]: Record<string, bigint>
  }
  bridgeOperations: {
    [address: string]: TOperation[]
  }
  transactionResults: Record<txHash, TransactionStatusResponse>
  minBridgeAmounts: Record<string, number>
  tokens: ITokenState
  chains: IChainState
  isBlockedByAllowance: boolean
  currentOperationClientData: BridgeOperationParams | undefined
  operationClientStatus: number | undefined
  destinationAddress: string
}

export const DEFAULT_BRIDGE_ENTITY_STATE: IBridgeEntityState = {
  commission: {
    value: {
      executionFeePercent: 0.001,
      networkFee: '0',
    },
    loading: 'idle',
  },
  bridgeLoading: 'idle',
  approveRequestOpen: false,
  claimLoading: false,
  balances: {},
  bridgeOperations: {},
  transactionResults: {},
  minBridgeAmounts: {},
  tokens: {
    from: '',
    to: '',
  },
  chains: {
    from: 0,
    to: 0,
  },
  destinationAddress: '',
  isBlockedByAllowance: false,
  currentOperationClientData: undefined,
  operationClientStatus: undefined,
}

const initialState: IBridgeEntityState = DEFAULT_BRIDGE_ENTITY_STATE

export const BridgeEntity = createSlice({
  name: 'BridgeEntity',
  initialState,
  extraReducers: (builder) => {
    builder.addCase('BridgeInteractor/getCommission/pending', (state: IBridgeEntityState) => {
      state.commission.loading = 'pending'
    })
    builder.addCase(BridgeInteractor.getTransactionStatus.fulfilled, (state, action) => {
      if (action.payload) {
        state.transactionResults[action.payload?.src_hash as txHash] = action.payload
      }
    })
    builder.addCase('BridgeInteractor/approveTransfer/pending', (state) => {
      state.bridgeLoading = 'pending'
    })
    builder.addCase('BridgeInteractor/approveTransfer/signed', (state) => {
      state.bridgeLoading = 'signed'
    })
    builder.addCase('BridgeInteractor/approveTransfer/fulfilled', (state) => {
      state.bridgeLoading = 'fulfilled'
    })
    builder.addCase('BridgeInteractor/approveTransfer/rejected', (state) => {
      state.bridgeLoading = 'rejected'
    })
    builder.addCase(BridgeInteractor.getBalances.fulfilled, (state, { payload }) => {
      state.balances[payload.address] = {
        ...(state.balances[payload.address] || {}),
        ...payload.balances,
      }
    })
  },
  reducers: {
    dropCurrentOperation(state) {
      state.currentOperationClientData = undefined
      state.bridgeLoading = 'idle'
      state.claimLoading = false
    },
    setCurrentOperationClientData(
      state,
      action: PayloadAction<BridgeOperationParams | undefined>
    ) {
      state.currentOperationClientData = undefined
      state.bridgeLoading = 'idle'
      state.claimLoading = false
      state.currentOperationClientData = action.payload
    },
    setOperationClientStatus(state, action: PayloadAction<number | undefined>) {
      state.operationClientStatus = action.payload
    },
    setTokens(state, action: PayloadAction<ITokenState>) {
      state.tokens = action.payload
    },
    setChains(state, action: PayloadAction<IChainState>) {
      state.chains = action.payload
    },
    setAllowanceBlock(state, action: PayloadAction<boolean>) {
      state.isBlockedByAllowance = action.payload
    },
    setLoading(state, action: PayloadAction<'pending' | 'signed' | 'fulfilled' | 'rejected'>) {
      state.bridgeLoading = action.payload
    },
    setApproveRequestOpen(state, action: PayloadAction<boolean>) {
      state.approveRequestOpen = action.payload
    },
    setClaimLoading(state, action: PayloadAction<boolean>) {
      state.claimLoading = action.payload
    },
    setDestinationAddress(state, action: PayloadAction<string>) {
      state.destinationAddress = action.payload
    },
    setBridgeOperations(
      state,
      action: PayloadAction<{ address: string; operations: TOperation[] }>
    ) {
      state.bridgeOperations[action.payload.address] = action.payload.operations
    },
    addBridgeOperations(
      state,
      action: PayloadAction<{ address: string; operations: TOperation[] }>
    ) {
      state.bridgeOperations[action.payload.address] = [
        ...action.payload.operations,
        ...(state.bridgeOperations[action.payload.address] || []),
      ]
    },
  },
})
