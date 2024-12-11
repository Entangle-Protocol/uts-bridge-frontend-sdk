import { memo } from 'react'

interface QrCodeProps extends React.SVGProps<SVGSVGElement> {}

export const QrCode = memo(({ className, ...props }: QrCodeProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14' {...props}>
      <path
        fill='currentColor'
        d='M1.75 6.417h1.167v1.166H1.75V6.417Zm4.667-3.5h1.166V5.25H6.417V2.917Zm-1.167 3.5h2.333V8.75H6.417V7.583H5.25V6.417Zm3.5 0h1.167v1.166h1.166V6.417h1.167v1.166h-1.167V8.75h1.167v2.333h-1.167v1.167H9.917v-1.167H7.583v1.167H6.417V9.917H8.75V8.75h1.167V7.583H8.75V6.417Zm2.333 4.666V8.75H9.917v2.333h1.166ZM8.75 1.75h3.5v3.5h-3.5v-3.5Zm1.167 1.167v1.166h1.166V2.917H9.917ZM1.75 1.75h3.5v3.5h-3.5v-3.5Zm1.167 1.167v1.166h1.166V2.917H2.917ZM1.75 8.75h3.5v3.5h-3.5v-3.5Zm1.167 1.167v1.166h1.166V9.917H2.917Z'
      />
    </svg>
  )
})

QrCode.displayName = 'QrCode'
