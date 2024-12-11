import cn from 'classnames'
import css from '@/containers/Bridge/BridgeCurrentTransaction/BridgeCurrentTransaction.module.scss'
import useAccount from '@/hooks/useAccount'
import { useSelector } from 'react-redux'
import { useAllTokens } from '@/ui/hooks/useAllTokens'
import { useSwitchChain } from 'wagmi'
import type { IState } from '@/core/store'
import { useAppDispatch } from '@/core/store'
import { useGetCommission } from '@/core/Bridge/hooks'
import { useGetDestBalance } from '@/containers/Bridge/BridgeCurrentTransaction/FundsPosition/useGetDestBalance'
import { useAddNotification } from '@/providers/NotificationContext'
import { memo, useCallback, useEffect, useMemo } from 'react'
import type { TokenOption } from '@/constants/tokens'
import { TokenBridgeProtocol } from '@/constants/tokens'
import type { BridgeOperationParams } from '@/core/Bridge/BridgeEntity'
import { BridgeEntity } from '@/core/Bridge/BridgeEntity'
import { Button } from '@/containers/Button/Button'
import { ETxStatus } from '@/containers/Bridge/bridgeTypes'
import { fundsTexts } from './FundsPosition.constants'
import { toFixedDown } from '@/utils/toFixedDown'

export interface FundsPositionProps {
  step: string
  hash: `0x${string}` | null
  protocol: TokenBridgeProtocol
  tokenFrom: TokenOption | undefined
  amountFrom: number | null
  dstChainId: string | number | null
  sourceChainId: string | number | null
  notClaimableChain?: boolean
}

export const FundsPosition = memo(
  ({
    step,
    hash,
    protocol,
    tokenFrom,
    amountFrom,
    dstChainId,
    sourceChainId,
  }: FundsPositionProps) => {
    const dispatch = useAppDispatch()
    const { allTokensObj } = useAllTokens()
    const texts = fundsTexts[protocol]
    const textNode = texts[step]
    const claimLoading = useSelector((state: IState) => state.BridgeEntity.claimLoading)
    const tokens = useSelector((state: IState) => state.BridgeEntity.tokens)
    const currentOperationClientData = useSelector(
      (state: IState) => state.BridgeEntity.currentOperationClientData
    )
    const tokenTo = allTokensObj[currentOperationClientData?.tokenTo || tokens.to]
    const isUTSToken = tokenTo?.protocol === TokenBridgeProtocol.UTS
    const chains = useSelector((state: IState) => state.BridgeEntity.chains)
    const { chainId } = useAccount()
    const currentChainTo = currentOperationClientData?.destChainId || chains.to

    const claimableChain = useMemo(() => {
      return chainId === currentChainTo
    }, [chainId, currentChainTo])

    const { switchChain } = useSwitchChain()

    const markPosAsClaimed = useCallback(() => {
      dispatch(
        BridgeEntity.actions.setCurrentOperationClientData({
          ...(currentOperationClientData as BridgeOperationParams),
          arrivedAt: new Date().getTime(),
          status: ETxStatus.COMPLETE,
          metadata: {
            ...currentOperationClientData?.metadata,
            claimed: true,
          },
          // txHash: currentOperationClientData?.txHash || ''
        })
      )
      const claimedPositions = localStorage.getItem('claimedPositions')
      const claimedPositionsParsed = claimedPositions ? JSON.parse(claimedPositions) : {}
      claimedPositionsParsed[hash as `0x${string}`] = new Date().getTime()
      localStorage.setItem('claimedPositions', JSON.stringify(claimedPositionsParsed))
    }, [currentOperationClientData, dispatch, hash])

    const addNotification = useAddNotification()

    const handleSwitchChain = useCallback(() => {
      switchChain({
        chainId: currentChainTo as number,
      })
    }, [currentChainTo, switchChain])

    const handleClaimUSDC = useCallback(async () => {
      if (sourceChainId && dstChainId) {
        try {
          dispatch(BridgeEntity.actions.setClaimLoading(true))
          setTimeout(() => {
            // for a smoother experience we have to update client version of data manually,
            // because of the on-chain data update lag
            markPosAsClaimed()
            dispatch(BridgeEntity.actions.setClaimLoading(true))
          }, 1500)
        } catch (error) {
          console.error(error)
          dispatch(BridgeEntity.actions.setClaimLoading(true))
          if ((error as Error)?.message.includes('Nonce already used')) {
            markPosAsClaimed()
            addNotification({
              type: 'error',
              title: 'Claiming failure',
              message: 'This transaction was already claimed',
            })
          } else {
            addNotification({
              type: 'error',
              title: 'Claiming failure',
              message: 'Something went wrong, please trying again later or contact support',
            })
          }
        }
      }
    }, [
      dispatch,
      addNotification,
      markPosAsClaimed,
      hash,
      dstChainId,
      sourceChainId,
      claimableChain,
      tokenFrom?.contractAddress,
      tokenTo?.metadata?.messageTransmitter,
      currentOperationClientData?.recipient,
      currentOperationClientData?.metadata?.attestation,
      currentOperationClientData?.metadata?.message_bytes,
    ])

    useEffect(() => {
      const interval = setInterval(() => {
        if (
          !tokenFrom?.tokenValue ||
          !(currentOperationClientData?.destChainId || chains.to)
        ) {
          return
        }
      }, 5000)
      return () => {
        clearInterval(interval)
      }
    }, [chains.to, currentOperationClientData?.destChainId, dispatch, tokenFrom?.tokenValue])

    const { willReceiveDisplay } = useGetCommission(
      Number(amountFrom),
      tokenFrom?.tokenValue,
      protocol === TokenBridgeProtocol.UTS
    )

    const showReceivingValue =
      protocol === TokenBridgeProtocol.CCM && !['0_2', '1_only'].includes(step)

    const resFundsAmount = showReceivingValue ? willReceiveDisplay : amountFrom

    const { balanceToDisplay, balanceToUSDDisplay } = useGetDestBalance()

    return (
      <div className={cn(css.destination, css.padding)}>
        {!!textNode && !!amountFrom && (
          <div className={cn(css.row, css.green)}>
            <div className={css.label}>{textNode}</div>
            <div className={css.value}>
              {resFundsAmount && toFixedDown(resFundsAmount, 2)} {tokenFrom?.tokenValue}
            </div>
          </div>
        )}
        <div className={cn(css.row)}>
          <div className={css.label}>Destination balance:</div>
          <div className={css.value}>
            <div>
              {balanceToDisplay} {tokenTo?.tokenValue}
            </div>
            {!isUTSToken && <div className={cn(css.sup)}>≈ ${balanceToUSDDisplay}</div>}
          </div>
        </div>

        <div>
          {!claimableChain &&
            protocol === TokenBridgeProtocol.CCTP &&
            step.startsWith('4') && (
              <Button
                disabled={claimLoading}
                className={css.switch}
                onClick={handleSwitchChain}
                styleFullWidth
                stylesLessCurved
                type='primary'
                variant='outlined'
              >
                Switch Network to Claim
              </Button>
            )}
          {claimableChain &&
            protocol === TokenBridgeProtocol.CCTP &&
            String(step)?.startsWith('4') &&
            currentOperationClientData?.status !== 'completed' && (
              <Button
                disabled={claimLoading}
                className={css.buttonOutlined}
                onClick={handleClaimUSDC}
                styleFullWidth
                stylesLessCurved
                type='primary'
              >
                Claim USDC
              </Button>
            )}
        </div>
      </div>
    )
  }
)

FundsPosition.displayName = 'FundsPosition'
