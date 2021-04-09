import React, { FunctionComponent } from 'react'
import { View, SafeAreaView, ImageBackground } from 'react-native'
import { ModalLoader } from '@Components'
import styles from './BasicContainerStyle'
import { Backgrounds } from '@Images'

export interface BasicContainerProps {
  isLoading?: boolean
  loadingText?: string
}

export const BasicContainer:FunctionComponent<BasicContainerProps> = ({ children, isLoading, loadingText }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Backgrounds.background} imageStyle={{ opacity: 0.5 }} style={{ width: '100%', height: '100%' }}>
        <ModalLoader loading={isLoading} actionText={loadingText} />
        <View style={styles.innerContainer}>
          {children}
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
