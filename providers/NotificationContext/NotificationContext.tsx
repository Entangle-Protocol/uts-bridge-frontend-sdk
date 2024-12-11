'use client'
import { createContext, memo, useCallback, useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import close_icon from '@/public/assets/icons/close-icon.svg'
import external_link from '@/public/assets/icons/external_link.svg'
import { generateId } from '@/helpers/generateId'

import classes from './NotificationContext.module.scss'

export type NotificationType = 'error' | 'success' | 'info' | 'process'

export interface INotification {
  id: string
  message: string
  title: string
  type: NotificationType
  link?: string
}

export const NotificationContext = createContext<{
  addNotification: (notification: Omit<INotification, 'id'>, removeTime?: number) => string
  updateNotification: (
    id: string,
    updatedNotification: Partial<Omit<INotification, 'id'>>
  ) => void
}>({
  addNotification: (notification: Omit<INotification, 'id'>, removeTime?: number) => '',
  updateNotification: (
    id: string,
    updatedNotification: Partial<Omit<INotification, 'id'>>
  ) => {},
})

interface NotificationContextProps {
  children: React.ReactNode
}

export const NotificationProvider = memo(({ children }: NotificationContextProps) => {
  const [notifications, setNotifications] = useState<INotification[]>([])

  const removeNotification = useCallback((id: string) => {
    setNotifications((notifications) =>
      notifications.filter((notification) => notification.id !== id)
    )
  }, [])

  const addNotification = useCallback(
    (notification: Omit<INotification, 'id'>, removeTime?: number) => {
      const id = generateId()
      const newNotification = { ...notification, id }
      setNotifications((notifications) => [...notifications, newNotification])

      if (removeTime || notification.type === 'error') {
        setTimeout(() => {
          removeNotification(id)
        }, removeTime ?? 10000)
      }

      return id
    },
    [removeNotification]
  )

  const updateNotification = useCallback(
    (id: string, updatedNotification: Partial<Omit<INotification, 'id'>>) => {
      setNotifications((notifications) => {
        const existingNotification = notifications.find(
          (notification) => notification.id === id
        )

        if (existingNotification) {
          const updatedNotifications = notifications.map((notification) =>
            notification.id === id ? { ...notification, ...updatedNotification } : notification
          )
          return updatedNotifications
        } else {
          const newNotification = { id, ...updatedNotification } as INotification
          const updatedNotifications = [...notifications, newNotification]
          return updatedNotifications
        }
      })

      setTimeout(() => {
        removeNotification(id)
      }, 10000)
    },
    [removeNotification]
  )

  return (
    <NotificationContext.Provider value={{ addNotification, updateNotification }}>
      {children}
      <div className={classes.notifications}>
        {notifications.map((notification, index) => (
          <div key={index} className={cn(classes.notification, classes[notification.type])}>
            <div className={classes.header}>
              <div className={classes.title}>{notification.title}</div>
              <Image
                onClick={() => removeNotification(notification.id)}
                width={20}
                height={19}
                src={close_icon.src}
                alt='Close Icon'
                className={classes.close}
              />
            </div>
            <div
              className={cn(classes.divider, {
                [classes.divider_progress]: notification.type === 'process',
              })}
            />
            <div className={classes.content}>
              <div className={classes.message}>{notification.message}</div>
              {notification.link && (
                <Link target='_blank' className={classes.link} href={notification.link}>
                  <Image width={20} height={20} src={external_link.src} alt='External Link' />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  )
})

export const useAddNotification = () => useContext(NotificationContext).addNotification
export const useUpdateNotification = () => useContext(NotificationContext).updateNotification

NotificationProvider.displayName = 'NotificationProvider'
