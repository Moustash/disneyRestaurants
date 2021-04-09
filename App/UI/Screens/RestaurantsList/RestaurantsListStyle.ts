import { StyleSheet } from 'react-native'
import { Colors } from '@Styles'

const styles = StyleSheet.create({
  searchBar: {
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    overflow: 'visible',
    elevation: 10,
  },
  focusedSearchBar: {
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: Colors.ghostBlack,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    shadowColor: Colors.black,
    color: Colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    overflow: 'visible',
    // elevation: 10,
  },
})

export default styles
