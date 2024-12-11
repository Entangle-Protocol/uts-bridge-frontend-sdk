import { ModalContainer } from '@/ui'
import { type FC, useMemo } from 'react'
import cx from 'classnames'
import cn from 'classnames'
import css from '../Modal.module.scss'
import type { IBridgeParticipantNetwork } from '../../bridgeTypes'
import { EBridgeInteractionType } from '../../bridgeTypes'
import { networkOptions } from '@/constants/networkConfigs'
import { areTokensInterChangeable } from '@/core/utils/token/areTokensInterChangeable'
import { SelectNetworkItem } from '@/containers/Bridge/Modal/SelectNetwork/SelectNetworkItem/SelectNetworkItem'
import { useAllTokens } from '@/ui/hooks/useAllTokens'

interface ISelectNetworkModal {
  onClose: () => void
  enable: boolean
  selectedValue: string
  onClick: (option: IBridgeParticipantNetwork) => void
  type?: string
  inverseTokenValue?: string
}

export const SelectNetworkModal: FC<ISelectNetworkModal> = ({
  onClose,
  enable,
  selectedValue,
  onClick,
  type,
  inverseTokenValue,
}) => {
  const { allTokensObj, allTokensByChainId } = useAllTokens()

  const networks = useMemo(() => {
    return networkOptions
      .filter(({ chainId }) => allTokensByChainId[chainId]?.length)
      .map((net) => {
        const isToType = type === EBridgeInteractionType.To
        const disabled =
          isToType &&
          inverseTokenValue &&
          !!allTokensObj[inverseTokenValue] &&
          !allTokensByChainId[net.chainId]?.some((item) => {
            return areTokensInterChangeable(item, allTokensObj[inverseTokenValue])
          })

        return { ...net, disabled } as IBridgeParticipantNetwork
      })
  }, [allTokensByChainId, allTokensObj, inverseTokenValue, type])

  return (
    <ModalContainer
      title='Select Network'
      enable={enable}
      onClose={onClose}
      isCloseIcon={true}
      modalClassName={cn(css.modal, css.networkModal)}
      titleClassName={css.modal__title}
      closeIconClassName={css.modal__close}
      className={css.container}
      closeIconThin
    >
      <div className={cx(css.modal__container, css.modal__container_network)}>
        {networks.map((option) => {
          return (
            <SelectNetworkItem
              key={option.networkValue}
              option={option}
              onClose={onClose}
              selected={selectedValue === option.networkValue}
              onClick={onClick}
              disabled={option.disabled}
            />
          )
        })}
      </div>
    </ModalContainer>
  )
}
