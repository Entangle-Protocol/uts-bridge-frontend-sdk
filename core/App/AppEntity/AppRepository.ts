import type { IAppRepository } from './AppRepository.interfaces'
import { PUBLIC_MAIN_HOST } from '@/core/url'

export const AppRepository: IAppRepository = {
  getGlobalConfigUi: async () => {
    try {
      const data = await fetch(`${PUBLIC_MAIN_HOST}/api/config`)
      return data.json()
    } catch (err) {
      console.error(err)
      return undefined
    }
  },
}
