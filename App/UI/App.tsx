import React, { FunctionComponent, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from './Navigation/RootStack'
import { Provider } from 'react-redux'
import { store } from '@Store'
import SplashScreen from 'react-native-splash-screen'
const App: FunctionComponent = () => {
  useEffect(() => {
    (async () => {
      SplashScreen.hide()
    })()
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App
