import { memo } from 'react'

export interface CloseIconProps extends React.SVGProps<SVGSVGElement> {
  type: 'up' | 'down'
}

export const UdfArrow = memo(({ type, ...props }: CloseIconProps) => {
  if (type === 'down') {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' {...props}>
        <mask id='a' width='24' height='24' x='0' y='0' maskUnits='userSpaceOnUse'>
          <path fill='#D9D9D9' d='M0 0h24v24H0z' />
        </mask>
        <g mask='url(#a)'>
          <path
            fill='#EF4444'
            d='m12 21.298-6.56-6.564.971-.989 4.892 4.892v-6.945h1.399v6.954l4.886-4.884.976.972L12 21.298Zm-.697-11.505V6.592h1.399v3.201h-1.4Zm0-5.1v-2h1.399v2h-1.4Z'
          />
        </g>
      </svg>
    )
  }
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' {...props}>
      <mask id='a' width='24' height='24' x='0' y='0' maskUnits='userSpaceOnUse'>
        <path fill='#D9D9D9' d='M0 0h24v24H0z' />
      </mask>
      <g mask='url(#a)'>
        <path
          fill='#54B10B'
          d='M11.303 5.344 6.41 10.228l-.97-.976L12 2.692l6.564 6.56-.976.988-4.886-4.886v6.944h-1.4V5.344Zm0 12.055v-3.202h1.399v3.202h-1.4Zm0 3.899v-2h1.399v2h-1.4Z'
        />
      </g>
    </svg>
  )
})

UdfArrow.displayName = 'UdfArrow'
