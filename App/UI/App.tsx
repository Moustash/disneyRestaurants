import { NavigationContainer } from '@react-navigation/native'
import React, { FunctionComponent } from 'react'
import RootStack from './Navigation/RootStack'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { store } from '@Store'

const App: FunctionComponent = () => {
  return (

    <Provider store={store}>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App
