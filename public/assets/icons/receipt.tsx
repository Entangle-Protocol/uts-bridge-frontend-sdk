export const ReceiptIcon = ({ ...props }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 17' {...props}>
      <mask id='a' width='16' height='17' x='0' y='0' maskUnits='userSpaceOnUse'>
        <path fill='#D9D9D9' d='M0 .5h16v16H0z' />
      </mask>
      <g mask='url(#a)'>
        <path
          fill='currentColor'
          d='M4 14.833c-.466 0-.86-.16-1.183-.484a1.605 1.605 0 0 1-.484-1.18V11.5h2V2.295l.924.795.936-.795.935.795.936-.795L9 3.09l.936-.795.936.795.936-.795.936.795.923-.795v10.872c0 .466-.162.86-.484 1.182a1.609 1.609 0 0 1-1.183.484H4Zm8-1a.645.645 0 0 0 .475-.191.645.645 0 0 0 .192-.475V3.833H5.334V11.5h6v1.667c0 .189.063.347.191.475a.645.645 0 0 0 .475.191Zm-5.872-7.5v-1H9.91v1H6.128Zm0 2v-1H9.91v1H6.128Zm5.167-1.91a.569.569 0 0 1-.417-.172.569.569 0 0 1-.173-.418c0-.163.058-.302.173-.417a.569.569 0 0 1 .417-.172c.163 0 .302.057.417.172a.568.568 0 0 1 .173.417.569.569 0 0 1-.173.418.569.569 0 0 1-.417.172Zm0 2a.569.569 0 0 1-.417-.172.569.569 0 0 1-.173-.418c0-.163.058-.302.173-.417a.569.569 0 0 1 .417-.172c.163 0 .302.057.417.172a.568.568 0 0 1 .173.417.569.569 0 0 1-.173.418.569.569 0 0 1-.417.172ZM4 13.833h6.334V12.5h-7v.667c0 .189.063.347.191.475a.645.645 0 0 0 .475.191Z'
        />
      </g>
    </svg>
  )
}