import { memo } from 'react'

import classes from './BridgeCctpNote.module.scss'
import Link from 'next/link'

export interface BridgeCctpNoteProps {}

export const BridgeCctpNote = memo(({}: BridgeCctpNoteProps) => {
  return (
    <div className={classes.root}>
      Please note that we are utilizing{' '}
      <Link
        href='https://www.circle.com/en/cross-chain-transfer-protocol'
        className={classes.link}
      >
        {' '}
        USDC&rsquo;s native bridge solution
      </Link>{' '}
      for cross-chain transactions. You must{' '}
      <span className={classes.green}>approve to send</span> USDC funds and{' '}
      <span className={classes.green}>claim it</span> on the destination chain.
    </div>
  )
})

BridgeCctpNote.displayName = 'BridgeCctpNote'
