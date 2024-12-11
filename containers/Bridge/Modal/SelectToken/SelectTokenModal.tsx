import { ModalContainer } from '@/ui'
import { type FC } from 'react'
import { SelectTokenItem } from './SelectTokenItem'
import css from '../Modal.module.scss'
import { EBridgeInteractionType } from '../../bridgeTypes'
import cn from 'classnames'
import { type TokenOption } from '@/constants/tokens'

interface ISelectTokenModalModal {
  onClose: () => void
  enable: boolean
  selectedValue: string
  onClick: (option: string) => void
  inverseValue: string
  options: TokenOption[]
  chainId?: number
  type: EBridgeInteractionType
  token?: string
}

export const SelectTokenModal: FC<ISelectTokenModalModal> = ({
  onClose,
  enable,
  selectedValue,
  options,
  onClick,
  chainId,
  type,
  inverseValue,
}) => {
  return (
    <ModalContainer
      title='Select Token'
      enable={enable}
      onClose={onClose}
      isCloseIcon={true}
      modalClassName={css.modal}
      titleClassName={css.modal__title}
      closeIconClassName={css.modal__close}
      className={css.container}
      closeIconThin
    >
      <>
        <div className={css.modal__container}>
          {options?.map((option, index) => (
            <div
              key={index}
              className={cn('flex justify-center', {
                'flex-col': type === EBridgeInteractionType.To,
              })}
            >
              <SelectTokenItem
                key={option.tokenValue + option.systemLabel}
                onClose={onClose}
                option={option}
                selectedValue={selectedValue}
                onClick={onClick}
                chainId={chainId}
                type={type}
                className='w-full'
                inverseValue={inverseValue}
              />
            </div>
          ))}
        </div>
      </>
    </ModalContainer>
  )
}
