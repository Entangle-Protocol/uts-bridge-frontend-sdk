import type { FC } from 'react'
import { useEffect, useRef } from 'react'
import type { EBridgeStatus } from '@/containers/Bridge/bridgeTypes'
import css from './BridgeCurrentTransaction.module.scss'
import { StatusProcess } from './StatusProcess'
import { StatusPipeline } from '@/containers/StatusPipeline'
import { useDispatch, useSelector } from 'react-redux'
import type { IState } from '@/core/store'
import { useLazyGetBridgeOperationByTxHashQuery } from '@/core/BridgeOperations/BridgeOperationsApi'
import { BridgeEntity } from '@/core/Bridge/BridgeEntity'
import { TokenBridgeProtocol } from '@/constants/tokens'
import { FundsPosition } from './FundsPosition'
import { TimePassed } from './TimePassed'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { Button } from '@/containers/Button/Button'
import { useReturnBack } from '@/providers/ReturnBackContext'
import { useCurrentStep } from '@/containers/Bridge/BridgeCurrentTransaction/useCurrentStep'
import { getClientDataFromServerData } from '@/core/Bridge/BridgeEntity/getClientDataFromServerData'
import { useAllTokens } from '@/ui/hooks/useAllTokens'

interface IStatusBlock {
  status: EBridgeStatus
  amount?: string
}

export const BridgeCurrentTransaction: FC<IStatusBlock> = ({ status, amount }) => {
  const iRef = useRef<NodeJS.Timeout | undefined>()
  const { allTokensObj, allTokensByChainId } = useAllTokens()
  const dispatch = useDispatch()
  const { goBackState } = useReturnBack()
  const isMobile = useMediaQuery(768)
  const currentOperationClientData = useSelector(
    (state: IState) => state.BridgeEntity.currentOperationClientData
  )
  const [getOperation, { data }] = useLazyGetBridgeOperationByTxHashQuery()

  useEffect(() => {
    if (data?.common_bridge_operations?.[0]) {
      const dataFromServer = data?.common_bridge_operations?.[0]
      const handledData = getClientDataFromServerData(dataFromServer, allTokensByChainId)
      const res =
        currentOperationClientData?.txHash === dataFromServer.src_tx_hash
          ? {
              ...currentOperationClientData,
              ...handledData,
            }
          : handledData
      dispatch(BridgeEntity.actions.setCurrentOperationClientData(res))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, allTokensByChainId])

  const chains = useSelector((state: IState) => state.BridgeEntity.chains)
  const tokens = useSelector((state: IState) => state.BridgeEntity.tokens)
  const currentTokenFrom =
    allTokensObj[(currentOperationClientData?.tokenFrom as string) || tokens.from]
  useEffect(() => {
    clearTimeout(iRef.current)
    if (
      currentOperationClientData?.metadata?.claimed ||
      currentOperationClientData?.metadata?.step === '5'
    ) {
      return
    }
    if (currentOperationClientData?.txHash) {
      getOperation({ address: currentOperationClientData.txHash })

      iRef.current = setInterval(() => {
        getOperation({ address: currentOperationClientData.txHash as `0x${string}` })
      }, 5000)
    }
    return () => {
      if (iRef.current) {
        clearTimeout(iRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentOperationClientData?.txHash])

  const step = useCurrentStep(amount)

  return (
    <div className={css.status}>
      <div className={css.status__container}>
        <StatusProcess status={status} />
        <div className={css.wrapper}>
          <div className={css.padding}>
            {currentOperationClientData?.timestamp && (
              <TimePassed
                createdAt={currentOperationClientData?.timestamp || undefined}
                updatedAt={currentOperationClientData?.arrivedAt || 0}
                isFinished={currentOperationClientData?.status === 'complete'}
              />
            )}
            <StatusPipeline
              step={step || '0'}
              sourceChainId={currentOperationClientData?.sourceChainId || chains.from}
              destChainId={currentOperationClientData?.destChainId || chains.to}
              src_hash={currentOperationClientData?.txHash || ''}
              dest_hash={currentOperationClientData?.dstTxHash || ''}
              protocol={currentTokenFrom?.protocol || TokenBridgeProtocol.CCM}
            />
          </div>
          <div className={css.wrapperDivider} />
          {/*
            down below you can see 2 possible cases of FundsPosition component usage(and of transaction state in general):
            - 1) transaction is only getting ready to sent
            - 2) transaction is already sent, but have only client-side generated state (no date from indexer yet)
                  OR we already got the data from the server (by polling for current transaction or by selecting one in the sidebar)
          */}
          {!currentOperationClientData && (
            <FundsPosition
              step={step || '0'}
              protocol={currentTokenFrom?.protocol || TokenBridgeProtocol.CCM}
              hash={null}
              sourceChainId={chains.from}
              dstChainId={chains.to}
              amountFrom={Number(amount)}
              // willReceive={currentOperation?.willReceive || 0}
              tokenFrom={currentTokenFrom || undefined}
            />
          )}
          {!!currentOperationClientData && (
            <FundsPosition
              step={step || '0'}
              protocol={currentOperationClientData.protocol || TokenBridgeProtocol.CCM}
              hash={currentOperationClientData.txHash}
              sourceChainId={currentOperationClientData?.sourceChainId || null}
              dstChainId={currentOperationClientData?.destChainId || null}
              amountFrom={Number(currentOperationClientData?.sent) || 0}
              // willReceive={currentOperation?.willReceive || 0}
              tokenFrom={currentTokenFrom || undefined}
            />
          )}
          {isMobile && (
            <div className={css.startWrapper}>
              <Button
                type='primary'
                onClick={goBackState}
                stylesLessCurved
                styleHigher
                styleFullWidth
                className={css.startButton}
              >
                Start Transaction
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
