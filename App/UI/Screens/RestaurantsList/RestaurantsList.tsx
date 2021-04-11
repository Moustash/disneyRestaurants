import { RestaurantSelectors, RestaurantDTO, StateTypes, RestaurantAction } from '@Store'
import { RestaurantItem, Button } from '@Components'
import { BasicContainer } from '@Containers'
import { MainRoutes } from '@Navigation'
import { Colors } from '@Styles'
import styles from './RestaurantsListStyle'

import React, { FunctionComponent, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList, Text, TextInput, View } from 'react-native'
import filter from 'lodash.filter'

export const RestaurantList: FunctionComponent = () => {
  const restaurantList: RestaurantDTO[] = useSelector(RestaurantSelectors.list)
  const restaurantState = useSelector((state: StateTypes) => state.restaurant)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [isFocused, setIsFocused] = useState(false)
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList)
  const [searchText, setSearchText] = useState<string | undefined>(undefined)

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

  /**
   *
   * @param {RestaurantDTO} item Restaurant item which contains details and url.
   */
  const onRestaurantItemPress = (item: RestaurantDTO) => {
    navigation.navigate(MainRoutes.RestaurantDetails, { item })
  }

  return (
    <BasicContainer isLoading={restaurantState?.loading} loadingText='Récupération...'>
      {restaurantState.error && !restaurantState.loading &&
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Il semblerait qu'une erreur soit survenue. Veuillez verifier votre connexion internet puis réessayez.
        </Text>
        <Button
          title='Réessayer'
          onPress={() => {
            dispatch(RestaurantAction.list())
          }}
        />

      </View>
      }
      {!restaurantState.error && !restaurantState.loading &&
      <View>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          clearButtonMode='always'
          onFocus={() => { setIsFocused(true) }}
          onBlur={() => { setIsFocused(false) }}
          value={searchText}
          onChangeText={searchText => handleSearch(searchText)}
          placeholder='Rechercher ...'
          placeholderTextColor={isFocused ? Colors.ghostWhite : Colors.ghostWhite}
          style={isFocused ? styles.focusedSearchBar : styles.searchBar}
          hitSlop={{ top: 20, bottom: 10, right: 20, left: 20 }}
        />
        <FlatList
          style={styles.listContainer}
          windowSize={50}
          scrollEventThrottle={2}
          maxToRenderPerBatch={50}
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
                  onRestaurantItemPress(item)
                }}
              />
            )
          }}
          updateCellsBatchingPeriod={100}
          bounces={false}
          removeClippedSubviews
          disableVirtualization
          keyboardShouldPersistTaps={'always'}
        />
      </View>
      }
    </BasicContainer>
  )
}
