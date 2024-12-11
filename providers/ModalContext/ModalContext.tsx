'use client'
import type { ReactNode } from 'react'
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'

export enum EModalType {
  UnstakingModal = 'unstakingModal',
}

type TModalContent = {
  type: EModalType
  value: string
  contentText: string
  onSubmit: () => Promise<void>
  delegatorName?: string
}

interface ModalContextType {
  modalContent: TModalContent | null
  showModal: (content: TModalContent) => void
  hideModal: () => void
}

const ModalContext = createContext<ModalContextType>({
  modalContent: null,
  showModal: () => {},
  hideModal: () => {},
})

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalContent, setModalContent] = useState<ModalContextType['modalContent']>(null)

  const showModal = useCallback((content: ModalContextType['modalContent']) => {
    setModalContent(content)
  }, [])

  const hideModal = useCallback(() => {
    setModalContent(null)
  }, [])

  const value = useMemo(
    () => ({ showModal, hideModal, modalContent }),
    [hideModal, modalContent, showModal]
  )

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export const useModal = () => useContext(ModalContext)
