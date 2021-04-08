import { StyleSheet } from 'react-native'
import { Colors } from '@Styles'

const styles = StyleSheet.create({
  imageContainer: {
    height: '50%',
    backgroundColor: Colors.backgroundDarker,

  },
  image: {
    width: '100%',
    height: '100%',
  },
  description: {
    padding: 20,
    fontSize: 18,
    fontStyle: 'italic',
  },
})

export default styles
