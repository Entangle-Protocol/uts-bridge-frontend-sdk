import { getMetadata } from '@/helpers/metadata/mainPage'
import BridgePage from '@/containers/Bridge/BridgePage'

export const metadata = getMetadata()

const Page = () => {
  return <BridgePage />
}

export default Page
