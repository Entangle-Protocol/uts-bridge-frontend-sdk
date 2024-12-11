import React, { memo, useMemo } from 'react'
import classes from './BridgeFees.module.scss'
import { IconExternal } from '@/public/assets/icons/external'
import { TokenBridgeProtocol } from '@/constants/tokens'
import { useSelector } from 'react-redux'
import type { IState } from '@/core/store'
import cn from 'classnames'
import { explorersGasTrackers } from '@/core/utils/chainExplorerLinkMap'
import { useAllTokens } from '@/ui/hooks/useAllTokens'
import { useWalletClient } from 'wagmi'
import { getChainByChainId } from '@/constants/networkConfigs'
import { useFetchGasAndPaymentAmount } from '@/hooks/useGetGasPrice'

export interface BridgeFeesProps {
  amount?: string
  className?: string
}

export const BridgeFees = memo(({ amount, className }: BridgeFeesProps) => {
  const tokens = useSelector((state: IState) => state.BridgeEntity.tokens)
  const { allTokensObj } = useAllTokens()
  const tokenFrom = allTokensObj[tokens.from]
  const onlyNetwork = tokenFrom?.protocol === TokenBridgeProtocol.CCTP
  const isUTSToken = tokenFrom?.protocol === TokenBridgeProtocol.UTS
  const { data: signer } = useWalletClient()
  const address = tokenFrom?.metadata?.connectorAddress
    ? tokenFrom?.metadata?.connectorAddress
    : tokenFrom?.contractAddress
  const chains = useSelector((state: IState) => state.BridgeEntity.chains)
  const chainTo = getChainByChainId(chains.to)?.name.toLowerCase()
  const chainFrom = getChainByChainId(chains.from)?.name.toLowerCase()
  const { UTSFeeRate } = useFetchGasAndPaymentAmount({
    signer,
    address,
    chains,
    chainTo,
    chainFrom,
  })

  const UTSfeeTotalUsdDisplay = useMemo(() => {
    if (!UTSFeeRate) {
      return
    }
    return UTSFeeRate < 0.01
      ? '< $0.01'
      : UTSFeeRate.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 2,
        })
  }, [UTSFeeRate])
  if (onlyNetwork) {
    return (
      <div className={cn(classes.content, classes.noBorder)}>
        <div className={classes.row}>
          <div className={classes.label}>Network Fee</div>
          <div className={classes.value}>
            View Current Gas
            <a href={explorersGasTrackers[chains.from] || ''} target='_blank'>
              <IconExternal className={classes.icon} width={18} />
            </a>
          </div>
        </div>
      </div>
    )
  }
  if (isUTSToken) {
    return (
      <div className={cn(classes.content, classes.noBorder)}>
        <div className={classes.row}>
          <div className={classes.label}>Network Fee</div>
          <div className={classes.totalFeeTop}>{UTSfeeTotalUsdDisplay}</div>
        </div>
      </div>
    )
  }
})

BridgeFees.displayName = 'BridgeFees'
