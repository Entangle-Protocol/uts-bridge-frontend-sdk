import Link from 'next/link'
import css from 'containers/Bridge/page.module.scss'

const BridgeHeader = () => {
  return (
    <header className={css.contentContainerHeader}>
      <div className={css.title}>Bridge</div>
      <div className={css.links}>
        Powered by
        <Link
          className={css.entangleLabsLink}
          href='https://entanglelabs.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          Entangle
        </Link>
      </div>
    </header>
  )
}

export default BridgeHeader
