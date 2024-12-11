import { memo } from 'react'

export interface CancelingUnboundingIconProps extends React.SVGProps<SVGSVGElement> {}

export const CancelingUnboundingIcon = memo(({ ...props }: CancelingUnboundingIconProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 29 29' {...props}>
      <path
        fill='#06E097'
        fillRule='evenodd'
        d='M14.76 1.959a.933.933 0 0 0-.95 0L3.545 8.026a.933.933 0 0 0 0 1.607l10.267 6.066a.933.933 0 0 0 .95 0l10.266-6.066a.933.933 0 0 0 0-1.607L14.76 1.959Zm-.474 11.853L5.854 8.829l8.432-4.982 8.432 4.982-8.432 4.983Zm-11.07.609a.933.933 0 0 1 1.278-.329l9.792 5.786 9.792-5.786a.933.933 0 0 1 .95 1.607L14.76 21.766a.934.934 0 0 1-.95 0L3.544 15.699a.933.933 0 0 1-.329-1.278Zm0 5.6a.933.933 0 0 1 1.278-.329l9.792 5.786 9.792-5.786a.933.933 0 0 1 .95 1.607L14.76 27.366a.934.934 0 0 1-.95 0L3.544 21.299a.933.933 0 0 1-.329-1.278Z'
        clipRule='evenodd'
      />
    </svg>
  )
})

CancelingUnboundingIcon.displayName = 'CancelingUnbounding'
