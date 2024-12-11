import { memo } from 'react'

export interface CoinsIconProps extends React.SVGProps<SVGSVGElement> {}

export const CoinsIcon = memo(({ ...props }: CoinsIconProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14' {...props}>
      <path
        fill='#F0EFF0'
        d='M9.625 5.199v-.261c0-1.176-1.773-2.063-4.125-2.063-2.352 0-4.125.887-4.125 2.063v1.875c0 .979 1.23 1.757 3 1.99v.26c0 1.175 1.773 2.062 4.125 2.062 2.352 0 4.125-.887 4.125-2.063V7.188c0-.97-1.192-1.75-3-1.99Zm2.25 1.989c0 .62-1.443 1.312-3.375 1.312a7.92 7.92 0 0 1-.52-.017c1.012-.369 1.645-.967 1.645-1.67v-.856c1.4.208 2.25.774 2.25 1.23Zm-7.5.855V6.928a8.817 8.817 0 0 0 2.25 0v1.115a7.642 7.642 0 0 1-2.25 0Zm4.5-1.89v.66c0 .393-.582.815-1.5 1.072V6.789c.605-.147 1.117-.365 1.5-.636ZM5.5 3.625c1.932 0 3.375.693 3.375 1.313S7.432 6.25 5.5 6.25s-3.375-.693-3.375-1.313S3.568 3.625 5.5 3.625ZM2.125 6.813v-.66c.382.27.895.49 1.5.636v1.096c-.918-.257-1.5-.68-1.5-1.072Zm3 2.25v-.196a9.02 9.02 0 0 0 .909-.008c.194.069.39.128.591.176v1.1c-.918-.257-1.5-.68-1.5-1.072Zm2.25 1.23V9.175a8.624 8.624 0 0 0 2.25.003v1.115a7.76 7.76 0 0 1-2.25 0Zm3-.159V9.04c.605-.147 1.117-.365 1.5-.636v.66c0 .393-.582.815-1.5 1.071Z'
      />
    </svg>
  )
})

CoinsIcon.displayName = 'CoinsIcon'
