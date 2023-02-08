import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  useDispatch,
  shallowEqual,
  type TypedUseSelectorHook
} from 'react-redux'
import recommendReducer from '../views/discover/c-views/recommend/store'
import playerReducer from '../views/player/store'

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    player: playerReducer
  }
})

type RootState = ReturnType<typeof store.getState>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store
