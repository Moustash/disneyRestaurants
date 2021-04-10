import React, { FunctionComponent } from 'react'
import { SafeAreaView, ImageBackground, StatusBar } from 'react-native'
import { ModalLoader } from '@Components'
import styles from './BasicContainerStyle'
import { Backgrounds } from '@Images'
import { Colors } from '@Styles'

export interface BasicContainerProps {
  isLoading?: boolean
  loadingText?: string
}

/**
 *
 * @param {boolean} isLoading Trigger loading modal
 * @param {string} loadingText Loading modal text
 * @param {React.ReactNode} children BasicContainer children
 */
export const BasicContainer:FunctionComponent<BasicContainerProps> = ({ children, isLoading, loadingText }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />
      <ImageBackground source={Backgrounds.background} imageStyle={styles.background} style={styles.imageContainer}>
        <ModalLoader loading={isLoading} text={loadingText} />
        {children}
      </ImageBackground>
    </SafeAreaView>
  )
}
