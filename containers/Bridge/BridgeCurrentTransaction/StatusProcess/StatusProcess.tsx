import css from './StatusProcess.module.scss'
import { type FC, useMemo } from 'react'
import { EBridgeStatus } from '@/containers/Bridge/bridgeTypes'
import { BridgeProcessIcon } from '@/public/assets/icons/bridge-process-icon'
import cn from 'classnames'
import { useSelector } from 'react-redux'
import type { IState } from '@/core/store'
import { getNetworkByChainId } from '@/constants/networkConfigs'
import { Participant } from '../Participant'
import { useAllTokens } from '@/ui/hooks/useAllTokens'

interface IStatusProcess {
  status: EBridgeStatus
}

const PROCESS_DATA = {
  [EBridgeStatus.NotConnectedWallet]: {
    processClassName: '',
  },
  [EBridgeStatus.ConnectedWallet]: {
    processClassName: css.process__icon_connected,
  },
  [EBridgeStatus.SourceReady]: {
    processClassName: css.process__icon_sourceready,
  },
  [EBridgeStatus.TargetReady]: {
    processClassName: css.process__icon_targetready,
  },
  [EBridgeStatus.BridgePending]: {
    processClassName: css.process__icon_targetready,
  },
  [EBridgeStatus.BridgeSuccess]: {
    processClassName: css.process__icon_targetready,
  },
  [EBridgeStatus.BridgeFailed]: {
    processClassName: css.process__icon_targetready,
  },
}

export const StatusProcess: FC<IStatusProcess> = ({ status }) => {
  const { processClassName } = PROCESS_DATA[status]
  const chains = useSelector((state: IState) => state.BridgeEntity.chains)
  const tokens = useSelector((state: IState) => state.BridgeEntity.tokens)
  const currentOperationClientData = useSelector(
    (state: IState) => state.BridgeEntity.currentOperationClientData
  )
  const { allTokensObj } = useAllTokens()
  const chainIdFrom = currentOperationClientData?.sourceChainId || chains.from
  const chainIdTo = currentOperationClientData?.destChainId || chains.to
  const tokenFromSystemLabel = currentOperationClientData?.tokenFrom || tokens.from
  const tokenToSystemLabel = currentOperationClientData?.tokenTo || tokens.to

  const from = useMemo(() => {
    return {
      ...((getNetworkByChainId(Number(chainIdFrom))
        ? getNetworkByChainId(Number(chainIdFrom))
        : getNetworkByChainId(chainIdFrom)) || {}),
      ...(allTokensObj[tokenFromSystemLabel] || {}),
    }
  }, [allTokensObj, chainIdFrom, tokenFromSystemLabel])

  const to = useMemo(() => {
    return {
      ...((getNetworkByChainId(Number(chainIdTo))
        ? getNetworkByChainId(Number(chainIdTo))
        : getNetworkByChainId(chainIdTo)) || {}),
      ...(allTokensObj[tokenToSystemLabel] || {}),
    }
  }, [allTokensObj, chainIdTo, tokenToSystemLabel])

  return (
    <div className={css.process}>
      <div className={css.process__participants}>
        <Participant participant={from} />
        <Participant participant={to} />
      </div>
      <BridgeProcessIcon className={cn(css.process__icon, processClassName)} />
    </div>
  )
}
