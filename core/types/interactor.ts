import type { AsyncThunk } from '@reduxjs/toolkit'

export type Thunk<Args, Return = void> = AsyncThunk<Return, Args, any>
