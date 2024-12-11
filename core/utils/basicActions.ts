import type { AsyncThunk, UnknownAction } from '@reduxjs/toolkit'

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>
type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

const isPendingAction =
  (interactor: string = '') =>
  (action: UnknownAction): action is PendingAction => {
    return (
      typeof action.type === 'string' &&
      action.type.startsWith(interactor) &&
      action.type.endsWith('/pending')
    )
  }
const isRejectedAction =
  (interactor: string = '') =>
  (action: UnknownAction): action is RejectedAction => {
    return (
      typeof action.type === 'string' &&
      action.type.startsWith(interactor) &&
      action.type.endsWith('/rejected')
    )
  }
const isFulfilledAction =
  (interactor: string = '') =>
  (action: UnknownAction): action is FulfilledAction => {
    return (
      typeof action.type === 'string' &&
      action.type.startsWith(interactor) &&
      action.type.endsWith('/fulfilled')
    )
  }

export { isPendingAction, isRejectedAction, isFulfilledAction }
