import { StyleSheet } from 'react-native'
import { Colors } from '@Styles'

const styles = StyleSheet.create({
  imageContainer: {
    height: '40%',
    backgroundColor: Colors.backgroundDarker,
    margin: 20,
    borderRadius: 20,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    borderColor: Colors.white,
    shadowOpacity: 0.10,
    borderWidth: 6,
    shadowRadius: 30,
    overflow: 'visible',
    elevation: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  description: {
    padding: 20,
    fontSize: 18,
    fontStyle: 'italic',
    backgroundColor: Colors.ghostWhite,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
})

export default styles
