import React, { FunctionComponent } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import styles from './RestaurantItemStyle'

export interface RestaurantItemProps {
  name: string,
  squareMediaUrl: string,
  onPress?: () => void
}
/**
 * @param {string} name
 * @param {string} squareMediaUrl
 * @param {void} onPress
 *
 * @description Render restaurantItem on restaurantList
 */
export const RestaurantItem: FunctionComponent<RestaurantItemProps> = ({ name, squareMediaUrl, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <Image source={{ uri: squareMediaUrl ?? '' }} style={styles.image} />
      <Text style={styles.restaurantName}>
        {name}
      </Text>
    </TouchableOpacity>
  )
}
