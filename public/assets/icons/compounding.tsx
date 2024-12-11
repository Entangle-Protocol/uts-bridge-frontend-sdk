import { memo } from 'react'

export interface CompoundingIconProps extends React.SVGProps<SVGSVGElement> {}

export const CompoundingIcon = memo(({ ...props }: CompoundingIconProps) => {
  return (
    <svg
      width='28'
      height='29'
      viewBox='0 0 28 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_6172_105585)'>
        <circle
          cx='5.73655'
          cy='7.21951'
          r='4.86111'
          transform='rotate(90 5.73655 7.21951)'
          stroke='#06E097'
          strokeWidth='1.94444'
        />
        <circle
          cx='19.3469'
          cy='17.9138'
          r='4.86111'
          transform='rotate(90 19.3469 17.9138)'
          stroke='#06E097'
          strokeWidth='1.94444'
        />
        <path
          d='M23.2681 19.8584C23.859 20.6678 24.208 21.6669 24.208 22.748C24.208 25.4477 22.0316 27.6362 19.3469 27.6362C16.6622 27.6362 14.4858 25.4477 14.4858 22.748C14.4858 21.6669 14.8348 20.6678 15.4257 19.8584'
          stroke='#06E097'
          strokeWidth='1.94444'
        />
        <path
          d='M14.676 2.6748C18.2003 3.37967 21.0197 6.19911 21.7246 8.31369'
          stroke='#06E097'
          strokeWidth='1.94444'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M23.8135 5.80762L22.7693 9.35721L19.1144 8.94033'
          stroke='#06E097'
          strokeWidth='1.94444'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10.1414 23.6699C6.61708 22.9651 3.79764 20.1456 3.09277 18.031'
          stroke='#06E097'
          strokeWidth='1.94444'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M0.875 19.5527L2.33333 16.4552L5.25 17.4274'
          stroke='#06E097'
          strokeWidth='1.94444'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_6172_105585'>
          <rect width='28' height='28' fill='white' transform='translate(0 0.900391)' />
        </clipPath>
      </defs>
    </svg>
  )
})

CompoundingIcon.displayName = 'Compounding'
