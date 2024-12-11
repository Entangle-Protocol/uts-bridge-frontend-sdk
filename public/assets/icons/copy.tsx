import { memo } from 'react'

export interface CopyIconProps extends React.SVGProps<SVGSVGElement> {}

export const CopyIcon = memo(({ ...props }: CopyIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='10'
      height='12'
      viewBox='0 0 10 12'
      fill='none'
      {...props}
    >
      <path
        d='M3.28369 9.70776C2.98901 9.70776 2.73958 9.60568 2.53542 9.40151C2.33125 9.19735 2.22917 8.94792 2.22917 8.65324V2.01228C2.22917 1.7176 2.33125 1.46818 2.53542 1.26401C2.73958 1.05985 2.98901 0.957764 3.28369 0.957764H8.17465C8.46933 0.957764 8.71875 1.05985 8.92292 1.26401C9.12708 1.46818 9.22917 1.7176 9.22917 2.01228V8.65324C9.22917 8.94792 9.12708 9.19735 8.92292 9.40151C8.71875 9.60568 8.46933 9.70776 8.17465 9.70776H3.28369ZM3.28369 8.83276H8.17465C8.21956 8.83276 8.26069 8.81405 8.29802 8.77662C8.33545 8.73928 8.35417 8.69816 8.35417 8.65324V2.01228C8.35417 1.96737 8.33545 1.92624 8.29802 1.88891C8.26069 1.85148 8.21956 1.83276 8.17465 1.83276H3.28369C3.23877 1.83276 3.19765 1.85148 3.16031 1.88891C3.12288 1.92624 3.10417 1.96737 3.10417 2.01228V8.65324C3.10417 8.69816 3.12288 8.73928 3.16031 8.77662C3.19765 8.81405 3.23877 8.83276 3.28369 8.83276ZM1.24202 11.7494C0.94734 11.7494 0.697917 11.6473 0.49375 11.4432C0.289583 11.239 0.1875 10.9896 0.1875 10.6949V3.17895H1.0625V10.6949C1.0625 10.7398 1.08122 10.781 1.11865 10.8183C1.15598 10.8557 1.1971 10.8744 1.24202 10.8744H7.00798V11.7494H1.24202Z'
        fill='#9DA2B3'
      />
    </svg>
  )
})

CopyIcon.displayName = 'CopyIcon'
