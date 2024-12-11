import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppRepository } from '@/core/App/AppEntity/AppRepository'
import type { IAppRepository } from '@/core/App/AppEntity/AppRepository.interfaces'

export interface IAppInteractor {
  getGlobalConfig: ReturnType<typeof createAsyncThunk<any, { id: number }, {}>>
}

export const createAppInteractor = (Repository: IAppRepository): IAppInteractor => ({
  getGlobalConfig: createAsyncThunk(
    'AppInteractor/getGlobalConfig',
    async (params: { id: number }) => {
      return await Repository.getGlobalConfigUi(params)
    }
  ),
})

export const AppInteractor = createAppInteractor(AppRepository)
