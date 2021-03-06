import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MainRoutes } from '@Navigation'
import { RestaurantList, RestaurantDetails } from '@Screens'
import { Colors } from '@Styles'

const Stack = createStackNavigator()

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={MainRoutes.RestaurantsList}
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name={MainRoutes.RestaurantsList}
        component={RestaurantList}
        options={{
          title: 'Les Restaurants',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={MainRoutes.RestaurantDetails}
        component={RestaurantDetails}
        options={{
          headerTitleAlign: 'center',
          headerBackTitle: 'Retour',
          headerTruncatedBackTitle: '',
        }}
      />
    </Stack.Navigator>
  )
}

export default RootStack
