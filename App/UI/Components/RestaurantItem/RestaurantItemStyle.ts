import { StyleSheet } from 'react-native'
import { Colors } from '@Styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: Colors.white,
    borderRadius: 20,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    overflow: 'visible',
    elevation: 10,
  },
  restaurantName: {
    fontSize: 16,
    marginLeft: 20,
    borderRadius: 20,
    alignSelf: 'center',
    flex: 1,
  },
  image: {
    marginLeft: 5,
    borderRadius: 20,
    width: 100,
    height: 100,
  },
})

export default styles
