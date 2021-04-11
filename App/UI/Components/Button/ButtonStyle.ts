import { StyleSheet } from 'react-native'
import { Colors } from '@Styles'

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 20,
    margin: 5,
    backgroundColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    overflow: 'visible',
    elevation: 10,
  },
  title: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.white,
  },

})

export default styles
