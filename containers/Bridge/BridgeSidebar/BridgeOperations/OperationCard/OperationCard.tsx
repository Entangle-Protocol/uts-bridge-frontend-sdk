import { memo, useCallback, useMemo } from 'react'

import styles from './OperationCard.module.scss'
import type { TOperation } from '../../BridgeOperations'
import cn from 'classnames'
import { timeAgo } from '@/helpers/timeAgo'
import { TxStatusName } from '@/containers/Bridge/bridgeTypes'
import Image from 'next/image'
import { formatUnits } from 'viem'
import { getChainByChainId } from '@/constants/networkConfigs'
import { toFixedDown } from '@/utils/toFixedDown'
import { ArrowRight } from '@/public/assets/icons/arrow-right-tx'
import { Spoiler } from './Spoiler/Spoiler'
import { getExplorerSearchLink } from '@/core/utils/chainExplorerLinkMap'
import { getExistChainId } from '@/helpers/getExistChainId'
import { useDispatch } from 'react-redux'
import { BridgeEntity } from '@/core/Bridge/BridgeEntity'
import { getClientDataFromServerData } from '@/core/Bridge/BridgeEntity/getClientDataFromServerData'
import { getTokenByNameAndChainId } from '@/constants/tokens'
import { useAllTokens } from '@/ui/hooks/useAllTokens'
import { JazzIcon } from '@/ui/components/JazzIcon/JazzIcon'

export interface OperationCardProps {
  switchTab?: () => void
  item: TOperation
}

export const OperationCard = memo(({ item, switchTab }: OperationCardProps) => {
  const {
    status,
    created_at,
    token,
    dst_chain_id,
    src_chain_id,
    amount,
    bridge_protocol,
    src_tx_hash,
    dst_tx_hash,
    metadata,
  } = item
  const dispatch = useDispatch()
  const srcChainId = getExistChainId(src_chain_id)
  const dstChainId = getExistChainId(dst_chain_id)
  const { allTokensByChainId } = useAllTokens()
  const tokenInfo = getTokenByNameAndChainId(srcChainId, token, allTokensByChainId)

  const srcChainInfo = getChainByChainId(srcChainId)
  const dstChainInfo = getChainByChainId(dstChainId)

  const txs = useMemo(() => {
    const txs = []

    if (bridge_protocol === 'cctp') {
      if (dst_tx_hash) {
        txs.push({
          id: 1,
          label: 'Destination Tx',
          chainId: dstChainId,
          txHash: dst_tx_hash,
          link: getExplorerSearchLink(dst_tx_hash, dstChainId, 'tx'),
        })
      }
      if (src_tx_hash) {
        txs.push({
          id: 2,
          label: 'Source Tx',
          chainId: srcChainId,
          txHash: src_tx_hash,
          link: getExplorerSearchLink(src_tx_hash, srcChainId, 'tx'),
        })
      }
    }

    if (bridge_protocol === 'entangle' || bridge_protocol === 'UTS') {
      if (dst_tx_hash) {
        txs.push({
          id: 1,
          label: 'Destination Tx',
          chainId: dstChainId,
          txHash: dst_tx_hash,
          link: getExplorerSearchLink(dst_tx_hash, dstChainId, 'tx'),
        })
      }
      if (metadata?.operation_two_hash) {
        txs.push({
          id: 2,
          label: 'Operation Second Tx',
          chainId: dstChainId,
          txHash: metadata.operation_two_hash,
          link: `/msg/${metadata.operation_two_hash}`,
        })
      }
      if (metadata?.operation_one_hash) {
        txs.push({
          id: 2,
          label: 'Operation First Tx',
          chainId: dstChainId,
          txHash: metadata.operation_one_hash,
          link: `/msg/${metadata.operation_one_hash}`,
        })
      }
      if (src_tx_hash) {
        txs.push({
          id: 4,
          label: 'Source Tx',
          chainId: srcChainId,
          txHash: src_tx_hash,
          link: getExplorerSearchLink(src_tx_hash, srcChainId, 'tx'),
        })
      }
    }

    return txs
  }, [
    bridge_protocol,
    dst_tx_hash,
    src_tx_hash,
    dstChainId,
    srcChainId,
    metadata.operation_two_hash,
    metadata.operation_one_hash,
  ])

  const handleClick = useCallback(() => {
    dispatch(
      BridgeEntity.actions.setCurrentOperationClientData(
        getClientDataFromServerData(item, allTokensByChainId)
      )
    )
    switchTab?.()
  }, [dispatch, item, allTokensByChainId, switchTab])

  const claimedPositions = useMemo(() => {
    const claimedPositions = localStorage.getItem('claimedPositions')
    return claimedPositions ? JSON.parse(claimedPositions) : {}
  }, [])

  const resStatus = claimedPositions[src_tx_hash] ? 'claimed' : status

  if (!tokenInfo) {
    return null
  }

  return (
    <div className={styles.root} onClick={handleClick}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={cn(styles.badge, styles[`badge_${resStatus}`])}>
            {TxStatusName[resStatus]}
          </div>
          <span className={styles.time}>{timeAgo(created_at)}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.token}>
            {tokenInfo?.tokenIcon ? (
              <Image
                className={styles.token__icon}
                alt={`${tokenInfo?.tokenText} Icon`}
                src={tokenInfo.tokenIcon || ''}
                width={16}
                height={16}
              />
            ) : (
              <JazzIcon address={tokenInfo.contractAddress} diameter={16} />
            )}
            <span
              className={styles.token__value}
            >{`${toFixedDown(+formatUnits(BigInt(amount), tokenInfo?.decimals || 18), 2)} ${tokenInfo?.tokenText}`}</span>
          </div>
          <div className={styles.chains}>
            <div className={styles.chain}>
              <Image
                className={styles.chain__icon}
                alt={`${srcChainInfo?.name} Icon`}
                src={srcChainInfo?.icon || ''}
                width={16}
                height={16}
              />
              <span>{srcChainInfo?.name && srcChainInfo?.name.split(' ')[0]}</span>
            </div>
            <ArrowRight className={styles.chains__arrow} />
            <div className={styles.chain}>
              <Image
                className={styles.chain__icon}
                alt={`${dstChainInfo?.name} Icon`}
                src={dstChainInfo?.icon || ''}
                width={16}
                height={16}
              />
              <span>{dstChainInfo?.name && dstChainInfo?.name.split(' ')[0]}</span>
            </div>
          </div>
        </div>
        <Spoiler txs={txs} />
      </div>
    </div>
  )
})

OperationCard.displayName = 'OperationCard'
