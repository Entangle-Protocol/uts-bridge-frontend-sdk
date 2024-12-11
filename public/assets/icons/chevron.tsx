interface IProps {
  classname?: string
}

const Chevron = ({ classname }: IProps) => (
  <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
    <mask
      id='mask0_9363_185256'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x='0'
      y='0'
      width='24'
      height='24'
    ></mask>
    <path
      d='M14 17.8939L8.10607 12L14 6.10607L15.2939 7.4L10.747 11.947L10.6939 12L10.747 12.053L15.2939 16.6L14 17.8939Z'
      className={classname}
      strokeWidth='0.15'
    />
  </svg>
)

export default Chevron
