import { BasicContainer } from '@Containers'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import HTML from 'react-native-render-html'
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
      {/* Handling HTML descriptions */}
      <HTML source={{ html: item?.shortDescription }} containerStyle={styles.description} />
    </BasicContainer>
  )
}
