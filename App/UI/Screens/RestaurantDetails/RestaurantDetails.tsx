import { BasicContainer } from '@Containers'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import styles from './RestaurantDetailsStyle'

export const RestaurantDetails: FunctionComponent = ({ route, navigation }) => {
  const { item } = route.params
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    navigation.setOptions({ title: item?.name ?? 'Détails' })
  }, [item])

  return (
    <BasicContainer isLoading={loading} loadingText={'Chargement des détails ...'}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item?.heroMedia?.url ?? '' }}
          style={styles.image}
          onLoad={() => { setLoading(true) }}
          onLoadEnd={() => { setLoading(false) }}
        />
      </View>
      <Text style={styles.description}>
        {item?.shortDescription ?? ''}
      </Text>
    </BasicContainer>
  )
}
