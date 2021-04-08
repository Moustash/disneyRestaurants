import { StyleSheet } from 'react-native'
import { Colors } from '@Styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 40,
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
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 40,
    alignSelf: 'center',
    flex: 1,
  },
  image: {
    marginLeft: 5,
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 40,
    width: 100,
    height: 100,
  },
})

export default styles
