import type { Dispatch, FC, SetStateAction } from 'react'
import React from 'react'
import cx from 'classnames'
import type { IBridgeParticipantNetwork } from '../bridgeTypes'
import { EBridgeInteractionType } from '../bridgeTypes'

import { NetworkSelector, TokenSelector } from './Selector'
import { ConnectWallet } from './ConnectWallet/ConnectWallet'

import styles from './InteractionBlock.module.scss'
import type { TokenOption } from '@/constants/tokens'
import type { IAmountBlock } from '@/containers/Bridge/InteractionBlock/AmountBlock/AmountBlock'
import { AmountBlock } from '@/containers/Bridge/InteractionBlock/AmountBlock/AmountBlock'
import { DestinationBlock } from '@/containers/Bridge/InteractionBlock/Destination'
import type { IDestinationBlock } from '@/containers/Bridge/InteractionBlock/Destination/DestinationBlock'
import { useSelector } from 'react-redux'
import type { IState } from '@/core/store'
import { useAppDispatch } from '@/core/store'
import { BridgeEntity } from '@/core/Bridge/BridgeEntity'
import { useAllTokens } from '@/ui/hooks/useAllTokens'
import { areTokensInterChangeable } from '@/core/utils/token/areTokensInterChangeable'

interface IInteractionBlock {
  className?: string
  type: EBridgeInteractionType
  inverseType: EBridgeInteractionType
  setAmount: Dispatch<SetStateAction<string | undefined>>
  onSwitch: () => void
  chainId?: number
  address?: string
  AmountProps: Omit<IAmountBlock, 'type'>
  DestinationProps?: IDestinationBlock
}

const getTokenPairFromAnotherChain = (currentToken: TokenOption, tokens: TokenOption[]) => {
  const findedToken = tokens.find((token) => areTokensInterChangeable(currentToken, token))
  return findedToken?.systemLabel
}

export const InteractionBlock: FC<IInteractionBlock> = ({
  className,
  type,
  inverseType,
  setAmount,
  onSwitch,
  chainId,
  address,
  AmountProps,
  DestinationProps,
}) => {
  const dispatch = useAppDispatch()
  const { allTokensObj, allTokensByChainId } = useAllTokens()
  const tokens = useSelector((state: IState) => state.BridgeEntity.tokens)
  const chains = useSelector((state: IState) => state.BridgeEntity.chains)
  const handleNetworkChange = (option: IBridgeParticipantNetwork) => {
    dispatch(BridgeEntity.actions.dropCurrentOperation())
    if (option.chainId == chains[inverseType]) {
      onSwitch()
      return
    }
    const tokensInSelectedNetwork = allTokensByChainId[option.chainId]
    const tokensInInverseNetwork = allTokensByChainId[chains[inverseType]]
    let tokenToBeSelected
    let inverseTokenToBeSelected
    let changeBothTokens = false
    let dropNetworkToValue = false

    if (type === EBridgeInteractionType.From) {
      if (option.isEntangle) {
        tokenToBeSelected = allTokensObj.TOKEN_NGL_WNGL.systemLabel
        if (tokens.to) {
          changeBothTokens = true
        }
      } else {
        if (tokens.to && allTokensObj[tokens.to]) {
          tokenToBeSelected = getTokenPairFromAnotherChain(
            allTokensObj[tokens.to],
            tokensInSelectedNetwork
          )
          if (!tokenToBeSelected) {
            tokenToBeSelected = tokensInSelectedNetwork[0].systemLabel
            changeBothTokens = true
          }
        } else {
          tokenToBeSelected = tokensInSelectedNetwork[0].systemLabel
        }
        // e.g.: we have selected Base-gorples -> bsc-gorples, and then in "from" we select entangle
        // No gorples is available for entangle, so we should change token for both "from" and "to"
      }
    } else {
      if (allTokensObj[tokens.from]) {
        tokenToBeSelected = getTokenPairFromAnotherChain(
          allTokensObj[tokens.from],
          tokensInSelectedNetwork
        )
      } else {
        tokenToBeSelected = tokensInSelectedNetwork[0].systemLabel
      }
    }
    if (changeBothTokens && tokenToBeSelected && allTokensObj[tokenToBeSelected]) {
      // if we need to change, token then
      // if in "to" network there is no acceptable token, drop the network
      inverseTokenToBeSelected = getTokenPairFromAnotherChain(
        allTokensObj[tokenToBeSelected],
        tokensInInverseNetwork
      )
      if (!inverseTokenToBeSelected) {
        dropNetworkToValue = true
      }
    }

    const newTokens = {
      ...tokens,
      ...(changeBothTokens ? { [inverseType]: inverseTokenToBeSelected } : {}),
      [type]: tokenToBeSelected,
    }
    const { setTokens, setChains } = BridgeEntity.actions
    dispatch(setTokens(newTokens))
    if (chains[type]) {
      setAmount('')
    }
    dispatch(
      setChains({
        ...chains,
        [inverseType]: dropNetworkToValue ? 0 : chains[inverseType],
        [type]: option.chainId,
      })
    )
  }

  const handleTokenChange = (option: string) => {
    dispatch(BridgeEntity.actions.dropCurrentOperation())
    const additionalState: Record<string, string> = {}
    if (
      type === EBridgeInteractionType.From &&
      !!allTokensObj[tokens[inverseType]] &&
      allTokensObj[option]
    ) {
      const tokenForAnotherChain = chains[inverseType]
        ? getTokenPairFromAnotherChain(
            allTokensObj[option],
            allTokensByChainId[chains[inverseType]]
          )
        : undefined
      if (tokenForAnotherChain) {
        additionalState[inverseType] = tokenForAnotherChain
      } else {
        // in this case chain selected in "to" doesn't fit at all. resetting it
        additionalState[inverseType] = ''
        dispatch(
          BridgeEntity.actions.setChains({
            ...chains,
            [inverseType]: 0,
          })
        )
      }
    }
    dispatch(BridgeEntity.actions.setTokens({ ...tokens, ...additionalState, [type]: option }))
  }

  return (
    <div className={cx(styles.interaction, className)}>
      <header className={styles.interaction__header}>
        <span
          className={cx(styles.interaction__title, {
            [styles.titlePad]: type === EBridgeInteractionType.To,
          })}
        >
          {type}
        </span>
        {type === EBridgeInteractionType.From && <ConnectWallet address={address} />}
        {type === EBridgeInteractionType.To && DestinationProps && (
          <div className={styles.interaction__destination}>
            <DestinationBlock {...DestinationProps} />
          </div>
        )}
      </header>
      <div className={styles.interaction__container}>
        <NetworkSelector
          className={styles.interaction__network}
          value={chains[type]}
          onClick={handleNetworkChange}
          inverseTokenValue={tokens[inverseType]}
          type={type}
        />
        <TokenSelector
          className={styles.interaction__token}
          options={allTokensByChainId[chains[type] || '']}
          value={tokens[type]}
          inverseValue={tokens[inverseType]}
          onClick={handleTokenChange}
          disabled={!chains[type]}
          chainId={chainId}
          type={type}
        />
        <div className={styles.interaction__amount}>
          <AmountBlock
            decimals={allTokensObj[tokens[type]]?.decimals}
            protocol={allTokensObj[tokens[type]]?.protocol}
            type={type}
            {...AmountProps}
          />
        </div>
      </div>
    </div>
  )
}
