import { StyleSheet } from 'react-native'
import { Colors } from '@Styles'

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 65,
  },
  searchBar: {
    position: 'absolute',
    zIndex: 10,
    width: '95%',
    paddingVertical: 7,
    marginTop: 10,
    backgroundColor: Colors.ghostPrimary,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    shadowColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    overflow: 'visible',
    elevation: 10,
    color: Colors.white,
    borderWidth: 5,
    borderColor: Colors.background,
  },
  focusedSearchBar: {
    position: 'absolute',
    zIndex: 10,
    width: '95%',
    paddingVertical: 7,
    marginTop: 10,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    shadowColor: Colors.ghostPrimary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    overflow: 'visible',
    elevation: 10,
    color: Colors.white,
    borderWidth: 5,
    borderColor: Colors.background,
  },
  errorContainer: {
    justifyContent: 'center',
    padding: 20,
    fontSize: 18,
    fontStyle: 'italic',
    backgroundColor: Colors.ghostWhite,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  errorText: {
    marginBottom: 20,
    textAlign: 'center',
  },
})

export default styles
