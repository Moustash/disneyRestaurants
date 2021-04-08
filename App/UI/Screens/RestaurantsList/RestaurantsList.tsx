import { RestaurantSelectors, RestaurantDTO, StateTypes, RestaurantAction } from '@Store'
import { RestaurantItem } from '@Components'
import { BasicContainer } from '@Containers'
import { MainRoutes } from '@Navigation'
import { Colors } from '@Styles'
import styles from './RestaurantsListStyle'

import React, { FunctionComponent, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList, TextInput } from 'react-native'
import filter from 'lodash.filter'

export const RestaurantList: FunctionComponent = () => {
  const restaurantList: RestaurantDTO[] = useSelector(RestaurantSelectors.list)
  const restaurantState = useSelector((state: StateTypes) => state.restaurant)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState(undefined)
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList)

  useEffect(() => {
    if (!restaurantState?.list?.loadedOnce) {
      dispatch(RestaurantAction.list())
    }
  }, [dispatch, restaurantState?.list?.loadedOnce])

  useEffect(() => {
    setFilteredRestaurants(restaurantList)
  }, [restaurantList])

  const contains = (item: RestaurantDTO, query: string) => {
    return !!item?.name?.toLowerCase()?.includes(query)
  }

  const handleSearch = (text: string) => {
    const formattedQuery = text.toLowerCase()
    const filteredData = filter(restaurantList, item => {
      return contains(item, formattedQuery)
    })
    setFilteredRestaurants(filteredData)
    setSearchText(text)
  }

  return (
    <BasicContainer isLoading={restaurantState?.loading} loadingText='Récupération...'>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        clearButtonMode='always'
        value={searchText}
        onChangeText={searchText => handleSearch(searchText)}
        placeholder='Search'
        placeholderTextColor={Colors.grey}
        style={styles.searchBar}
      />
      <FlatList
        windowSize={50}
        scrollEventThrottle={20}
        maxToRenderPerBatch={20}
        onEndReachedThreshold={0.5}
        data={filteredRestaurants}
        keyExtractor={item => item.id}
        renderItem={({ item }:{item: RestaurantDTO}) => {
          return (
            <RestaurantItem
              key={item.id}
              name={item.name}
              squareMediaUrl={item?.squareMedia?.url}
              onPress={() => {
                navigation.navigate(MainRoutes.RestaurantDetails, { item })
              }}
            />
          )
        }}
        updateCellsBatchingPeriod={100}
        bounces={false}
        removeClippedSubviews
      />
    </BasicContainer>
  )
}
