interface IconProps {
  width?: number
  height?: number
  className?: string
  color?: string
}

export const Refresh = ({
  width = 13,
  height = 13,
  color = '#069A69',
  className,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 13 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.65095 6.32333C1.65095 8.96163 3.56386 10.7589 5.7119 11.1308C5.95771 11.1734 6.12247 11.4072 6.07991 11.653C6.03735 11.8988 5.80358 12.0635 5.55777 12.021C3.03433 11.584 0.747558 9.4571 0.747558 6.32333C0.747558 4.99155 1.35346 3.94492 2.06104 3.14873C2.56822 2.57803 3.14851 2.11473 3.61502 1.7599L2.19541 1.7599C1.95609 1.7599 1.76208 1.56588 1.76208 1.32656C1.76208 1.08724 1.95609 0.893228 2.19541 0.893228L4.79541 0.893228C5.03474 0.893228 5.22875 1.08724 5.22875 1.32656L5.22875 3.92656C5.22875 4.16588 5.03474 4.35989 4.79541 4.35989C4.55609 4.35989 4.36208 4.16588 4.36208 3.92656L4.36208 2.32812L4.36122 2.32877C3.86595 2.7023 3.26068 3.15879 2.7363 3.74884C2.11705 4.44565 1.65095 5.28747 1.65095 6.32333ZM11.2769 6.67742C11.2769 4.06697 9.4045 2.28029 7.2841 1.88222C7.03892 1.83619 6.87748 1.60012 6.92351 1.35494C6.96953 1.10976 7.20561 0.948312 7.45079 0.99434C9.94182 1.46199 12.1802 3.57722 12.1802 6.67742C12.1802 8.0092 11.5743 9.05583 10.8668 9.85202C10.3596 10.4227 9.77941 10.8859 9.31292 11.2408L10.7324 11.2408C10.9717 11.2408 11.1657 11.4348 11.1657 11.6741C11.1657 11.9134 10.9717 12.1074 10.7324 12.1074L8.13239 12.1074C7.89307 12.1074 7.69906 11.9134 7.69906 11.6741L7.69906 9.07409C7.69906 8.83476 7.89307 8.64075 8.13239 8.64075C8.37172 8.64075 8.56573 8.83476 8.56573 9.07409L8.56573 10.6726L8.56658 10.672C9.06186 10.2984 9.66712 9.84196 10.1915 9.25191C10.8108 8.5551 11.2769 7.71329 11.2769 6.67742Z'
        fill={color}
      />
    </svg>
  )
}