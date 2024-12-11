'use client'
import css from './Modal.module.css'
import type { FC, MouseEventHandler, ReactNode } from 'react'
import { useEffect } from 'react'
import cn from 'classnames'
import { CloseIcon } from '@/public/assets/icons/close'

interface ModalContainerProps {
  enable: boolean
  title?: string | ReactNode
  children: ReactNode
  isCloseIcon?: boolean
  onClose: () => void
  className?: string
  modalClassName?: string
  titleClassName?: string
  titleTextClassName?: string
  styleBasic?: boolean
  closeIconClassName?: string
  closeIconThin?: boolean
}

export const ModalContainer: FC<ModalContainerProps> = ({
  enable = false,
  title,
  children,
  isCloseIcon,
  className,
  modalClassName,
  titleClassName,
  titleTextClassName,
  onClose,
  styleBasic,
  closeIconClassName,
  closeIconThin,
}) => {
  const handleContentClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
  }

  useEffect(() => {
    //@ts-ignore
    if (typeof document !== 'undefined' && typeof document.body !== 'undefined' && enable) {
      //@ts-ignore
      document.body.className = css.bodyOverflowHidden

      return () => {
        //@ts-ignore
        document.body.className = ''
      }
    }
  }, [])

  if (!enable) {
    return null
  }

  const closeIconType = () => {
    if (closeIconThin) {
      return 'thin'
    }
    if (styleBasic) {
      return 'new'
    }
    return 'base'
  }

  return (
    <div
      className={cn(css.modalContainer, className, { [css.modalContainerBasic]: styleBasic })}
      onClick={onClose}
    >
      <div
        className={cn(css.modal, modalClassName, { [css.modalBasic]: styleBasic })}
        onClick={handleContentClick}
      >
        {title && (
          <div className={cn(css.modalHeader, titleClassName)}>
            <div
              className={cn(css.title, titleTextClassName, { [css.titleBasic]: styleBasic })}
            >
              {title}
            </div>
            {isCloseIcon && (
              <button
                className={cn(
                  css.closeIcon,
                  { [css.closeIconBasic]: styleBasic },
                  closeIconClassName
                )}
                onClick={onClose}
              >
                <CloseIcon type={closeIconType()} />
              </button>
            )}
          </div>
        )}
        {styleBasic && <div className={css.divider} />}
        {children}
      </div>
    </div>
  )
}
