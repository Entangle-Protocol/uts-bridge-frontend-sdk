'use client'
import type { FC, ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import type { IState } from '@/core/store'
import 'react-toastify/dist/ReactToastify.css'
import StoreWrapper from '@/containers/StoreWrapper/StoreWrapper'
import type { State } from 'wagmi'
import { NotificationProvider } from '@/providers/NotificationContext'
import { ModalProvider } from '@/providers/ModalContext/ModalContext'
import Web3Manager from '@/blockchain/Web3Manager'
import { ReturnBackProvider } from '@/providers/ReturnBackContext/ReturnBackContext'

export const Providers: FC<{
  children: ReactNode
  initData: IState
  initWalletData?: State
}> = ({ children, initData, initWalletData }) => {
  return (
    <Web3Manager initialState={initWalletData}>
      <ToastContainer />
      <NotificationProvider>
        <StoreWrapper initStoreData={initData}>
          <ModalProvider>
            <ReturnBackProvider>{children}</ReturnBackProvider>
          </ModalProvider>
        </StoreWrapper>
      </NotificationProvider>
    </Web3Manager>
  )
}
