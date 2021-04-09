import { NavigationContainer } from '@react-navigation/native'
import React, { FunctionComponent } from 'react'
import RootStack from './Navigation/RootStack'
import { Provider } from 'react-redux'
import { store } from '@Store'

/**
 *
 * @description Default screen, openning RootStack
 */

const App: FunctionComponent = () => {
  return (

    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App
