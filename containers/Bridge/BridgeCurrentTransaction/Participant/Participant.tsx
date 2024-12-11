import type { FC } from 'react'
import css from './Participant.module.scss'
import cn from 'classnames'
import Image, { type StaticImageData } from 'next/image'
import type { TokenName } from '@/constants/tokens'

interface IParticipant {
  participant?: {
    networkText: string
    networkIcon: StaticImageData | null
    tokenValue: TokenName | ''
  }
}

export const Participant: FC<IParticipant> = ({ participant }) => {
  return (
    <div className={css.participant}>
      {!participant?.networkIcon ? (
        <>
          <div className={css.participant__box}>
            <div className={cn(css.participant__icon, css.participant__icon_empty)} />
          </div>
          <div className={css.participant__info}>
            <div className={css.participant__network}>Network</div>
            <div className={css.participant__token}>Token</div>
          </div>
        </>
      ) : (
        <>
          <div className={css.participant__box}>
            <Image
              className={css.participant__icon}
              width={36}
              height={36}
              src={participant.networkIcon}
              alt={participant.networkText}
            />
          </div>
          <div className={css.participant__info}>
            <div className={css.participant__network}>{participant.networkText}</div>
            <div className={css.participant__token}>{participant.tokenValue}</div>
          </div>
        </>
      )}
    </div>
  )
}
