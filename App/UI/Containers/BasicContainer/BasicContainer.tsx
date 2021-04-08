import React, { FunctionComponent } from 'react'
import { View, SafeAreaView } from 'react-native'
import { ModalLoader } from '@Components'
import styles from './BasicContainerStyle'

export interface BasicContainerProps {
  isLoading?: boolean
  loadingText?: string
}

export const BasicContainer:FunctionComponent<BasicContainerProps> = ({ children, isLoading, loadingText }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ModalLoader loading={isLoading} actionText={loadingText} />
      <View style={styles.innerContainer}>
        {children}
      </View>
    </SafeAreaView>
  )
}
