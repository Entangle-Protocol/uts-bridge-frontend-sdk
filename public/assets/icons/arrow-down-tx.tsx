export const ArrowDown = ({ ...props }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16' {...props}>
      <mask id='a' width='16' height='16' x='0' y='0' maskUnits='userSpaceOnUse'>
        <path fill='#D9D9D9' d='M0 0h16v16H0z' />
      </mask>
      <g mask='url(#a)'>
        <path
          fill='#06E097'
          d='m8 10.037-3.77-3.77.703-.702L8 8.632l3.066-3.067.703.702-3.77 3.77Z'
        />
      </g>
    </svg>
  )
}
