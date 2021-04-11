import React, { FunctionComponent } from 'react'
import { Text, TouchableOpacity, ButtonProps } from 'react-native'
import styles from './ButtonStyle'

/**
 * @param {string} title
 * @param {void} onPress
 *
 * @description CustomButton with style
 */
export const Button: FunctionComponent<ButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
