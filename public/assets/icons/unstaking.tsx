import { memo } from 'react'

export interface UnstakingIconProps extends React.SVGProps<SVGSVGElement> {}

export const UnstakingIcon = memo(({ ...props }: UnstakingIconProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 29 29' {...props}>
      <path
        fill='#06E097'
        fillRule='evenodd'
        d='M15.094 3.106a.84.84 0 0 0-1.188 0l-5.6 5.6a.84.84 0 0 0 1.188 1.188l4.166-4.166v12.906a.84.84 0 0 0 1.68 0V5.728l4.166 4.166a.84.84 0 1 0 1.188-1.188l-5.6-5.6Zm-9.928 16.46c.516 0 .934.419.934.934v2.8a1.86 1.86 0 0 0 1.86 1.867h13.075c1.03 0 1.865-.835 1.865-1.867v-2.8a.933.933 0 0 1 1.867 0v2.8a3.732 3.732 0 0 1-3.732 3.734H7.96A3.728 3.728 0 0 1 4.233 23.3v-2.8c0-.515.418-.933.933-.933Z'
        clipRule='evenodd'
      />
    </svg>
  )
})

UnstakingIcon.displayName = 'Unstaking'
