import { createStore, applyMiddleware, compose, Store, Reducer } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistReducer, persistStore, Persistor } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

// creates the store
interface StoreConfiguration {
  store: Store,
  persistor: Persistor,
}

export default (rootReducer: Reducer): StoreConfiguration => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [thunkMiddleware]
  const enhancers = []

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [],
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, compose(...enhancers))
  const persistor = persistStore(store)

  return {
    store,
    persistor,
  }
}
