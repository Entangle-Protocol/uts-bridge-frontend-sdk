import { Fragment, memo, useEffect, useState } from 'react'
import Image from 'next/image'
import external_link from '@/public/assets/icons/external_link.svg'
import { Refresh } from '@/public/assets/icons/Refresh'

import classes from './StatusPipeline.module.scss'
import type { TransactionStatusResponse } from '@/core/Bridge/BridgeEntity'
import { getExplorerSearchLink } from '@/core/utils/chainExplorerLinkMap'
import Link from 'next/link'
import type { TokenBridgeProtocol } from '@/constants/tokens'
import { Point } from './Point'
import { DELAY_BETWEEN_STEP_AND_ONLY, emptyHash, statusesMap } from './statusPipline.const'
import { Line } from './Line'

export interface StatusPipelineProps {
  transactionStatus?: TransactionStatusResponse
  sourceChainId: string | number
  destChainId: string | number
  src_hash?: string
  dest_hash?: string
  step?: string
  failed?: boolean
  protocol: TokenBridgeProtocol
}

export const StatusPipeline = memo(
  ({
    sourceChainId,
    destChainId,
    dest_hash,
    src_hash,
    step = '0',
    failed,
    protocol = 2,
  }: StatusPipelineProps) => {
    const [timedOutOnlies, setTimedOutOnlies] = useState<Record<string, boolean>>({})
    let link

    if (dest_hash && destChainId !== 33033) {
      link = getExplorerSearchLink(dest_hash, destChainId, 'tx')
    } else if (src_hash && sourceChainId !== 33033) {
      link = getExplorerSearchLink(src_hash, sourceChainId, 'tx')
    }

    const isFailed = failed || false
    const showTransactionLink = true

    const stepIndex = parseInt(step, 10)
    const showLinkAwaitingText = dest_hash === emptyHash && stepIndex === 5
    const statusTexts = statusesMap[protocol]
    const only = !!statusTexts[`${step}_only`] && !timedOutOnlies[step]

    useEffect(() => {
      if (only) {
        setTimeout(() => {
          setTimedOutOnlies((prev) => ({ ...prev, [step]: true }))
        }, DELAY_BETWEEN_STEP_AND_ONLY)
      }
    }, [only, step])

    return (
      <div className={classes.root}>
        <div className={classes.pipeline}>
          <Point
            isFailed={[0, 1].includes(stepIndex) && isFailed}
            isDone={stepIndex > 0}
            isLoading={stepIndex === 0 && !isFailed}
            isGray={step === '0_0' || stepIndex > 1}
          />
          {Array.from({ length: 4 }).map((_, index) => (
            <Fragment key={index}>
              <Line
                isDone={stepIndex > index + 1}
                isLoading={stepIndex === index + 1 && !isFailed && !only}
                isGray={stepIndex > index + 1}
              />
              <Point
                isFailed={stepIndex === index + 2 && isFailed}
                isDone={stepIndex > index + 1}
                isLoading={stepIndex === index + 1 && !isFailed && !only}
                isGray={stepIndex > index + 2}
              />
            </Fragment>
          ))}
        </div>
        <div className={classes.status}>
          {!isFailed && showLinkAwaitingText && (
            <>
              Tokens received, getting transaction link...
              <Refresh />
              className={classes.refresh}
              width={12}
              height={12}
            </>
          )}
          {!showLinkAwaitingText && !isFailed && statusTexts[`${step}${only ? '_only' : ''}`]}
          {isFailed && `Failed while ${statusTexts[step].toLowerCase()}`}
          {link && showTransactionLink && !showLinkAwaitingText && (
            <Link href={link} target='_blank'>
              <Image
                width={12}
                height={12}
                src={external_link.src}
                className={classes.linkIcon}
                alt=''
              />
            </Link>
          )}
        </div>
      </div>
    )
  }
)

StatusPipeline.displayName = 'StatusPipeline'
