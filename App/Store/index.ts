import { ThunkDispatch } from 'redux-thunk'
import { AnyAction, combineReducers } from 'redux'
import createStore from './CreateStore'

/**
 * States.
**/

import { restaurant, RestaurantState } from './restaurant'

export type Dispatch = ThunkDispatch<StateTypes, {}, AnyAction>

export * from './restaurant'

export const reducers = combineReducers({
  restaurant: restaurant,
})

export interface StateTypes {
  restaurant: RestaurantState
}

export const { store, persistor } = createStore(reducers)
