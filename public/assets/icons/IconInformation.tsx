interface IconInformationProps {
  className?: string
  width?: number
  height?: number
}

export const IconInformation = ({
  className,
  width = 18,
  height = 19,
}: IconInformationProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 19'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9 16.4165C12.7279 16.4165 15.75 13.3944 15.75 9.6665C15.75 5.93858 12.7279 2.9165 9 2.9165C5.27208 2.9165 2.25 5.93858 2.25 9.6665C2.25 13.3944 5.27208 16.4165 9 16.4165Z'
        stroke='#069A69'
        strokeWidth='1.0125'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9 12.6665V9.6665'
        stroke='#069A69'
        strokeWidth='1.125'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9 6.6665H9.00667'
        stroke='#069A69'
        strokeWidth='1.125'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
