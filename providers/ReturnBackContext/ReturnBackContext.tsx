'use client'
import { createContext, memo, useContext, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

interface IReturnBack {
  showBackButton: boolean
  goToPage: (page: string, label: string) => void
  goBackPage: () => void
  goToState: (label: string) => void
  goBackState: () => void
  content: string | null
}

export const ReturnBackContext = createContext<IReturnBack>({
  showBackButton: false,
  goToPage: () => {},
  goBackPage: () => {},
  goToState: () => {},
  goBackState: () => {},
  content: null,
})

interface ReturnBackContextProps {
  children: React.ReactNode
}

export const ReturnBackProvider = memo(({ children }: ReturnBackContextProps) => {
  const [showBackButton, setShowBackButton] = useState(false)
  const [previousPage, setPreviousPage] = useState('/')
  const [content, setContent] = useState<string | null>(null)
  const { push } = useRouter()
  const pathname = usePathname()

  const reset = () => {
    setShowBackButton(false)
    setContent(null)
  }

  const goToPage = (page: string, label: string) => {
    setPreviousPage(pathname)
    setShowBackButton(true)
    setContent(label)
    push(page)
  }

  const goBackPage = () => {
    reset()
    push(previousPage)
  }

  const goToState = (label: string) => {
    setContent(label)
    setShowBackButton(true)
  }

  const goBackState = () => {
    reset()
  }

  return (
    <ReturnBackContext.Provider
      value={{ showBackButton, goToPage, goBackPage, goToState, goBackState, content }}
    >
      {children}
    </ReturnBackContext.Provider>
  )
})

export const useReturnBack = () => useContext(ReturnBackContext)

ReturnBackProvider.displayName = 'ReturnBackProvider'
