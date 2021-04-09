import { Assets } from '@Images'
import React, { FunctionComponent } from 'react'
import { Modal, View, Text, Image } from 'react-native'
import styles from './ModalLoaderStyle'

export interface ModalLoaderProps {
  text?: string
  loading: boolean | undefined
}
/**
 *
 * @param { string } actionText Loading modal text
 * @param { boolean } loading Loading trigger
 */
export const ModalLoader: FunctionComponent<ModalLoaderProps> = ({ text, loading = false }) => {
  return (
    <Modal
      visible={loading}
      animationType='none'
      transparent
    >
      <View style={styles.loadingModal}>
        {/* Fancy loader found on internet */}
        <Image source={Assets.loader}
          style={{ height: 250, width: 250 }}
        />
        { text &&
        <Text style={styles.loadingText}>{text?.toUpperCase() }</Text>}
      </View>
    </Modal>
  )
}
