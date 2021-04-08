import React, { FunctionComponent } from 'react'
import { Modal, View, Text, Image } from 'react-native'
import styles from './ModalLoaderStyle'

export interface ModalLoaderProps {
  actionText?: string
  loading: boolean | undefined
}

export const ModalLoader: FunctionComponent<ModalLoaderProps> = ({ actionText, loading = false }) => {
  const renderText = () => {
    const buttonText = actionText
    if (buttonText) {
      return (
        <Text style={styles.loadingText}>{buttonText.toUpperCase()}</Text>
      )
    }
  }
  return (
    <Modal
      visible={loading}
      animationType='none'
      transparent
    >
      <View style={styles.loadingModal}>
        <Image source={{ uri: 'https://i.imgur.com/8riPm56.gif' }}
          style={{ height: 250, width: 250 }}
        />
        {renderText()}
      </View>
    </Modal>
  )
}
