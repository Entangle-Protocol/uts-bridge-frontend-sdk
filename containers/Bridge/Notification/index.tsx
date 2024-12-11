import type { ToastOptions } from 'react-toastify'
import { toast } from 'react-toastify'
import Image from 'next/image'
import error_icon from '@/public/assets/icons/error.svg'
import close_icon from '@/public/assets/icons/closeDrop.svg'
import './style.scss'

const NOTIFICATION_CONFIG: ToastOptions = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
}

const notifyError = (message: string) => {
  toast.error(message, {
    ...NOTIFICATION_CONFIG,
    icon: () => <Image width={20} height={19} src={error_icon.src} alt='Error Icon' />,
    closeButton: () => (
      <Image
        className='button_close'
        width={16}
        height={16}
        src={close_icon.src}
        alt='Close Icon'
      />
    ),
    className: 'notification_error',
  })
}

export { notifyError }
