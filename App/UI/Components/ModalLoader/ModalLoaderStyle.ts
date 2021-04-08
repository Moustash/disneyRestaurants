import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  loadingText: {
    margin: 15,
    color: 'black',
    textAlign: 'center',
  },
  loadingModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, .8)',
  },
  loadingImage: {
    height: 80,
    width: 80,
  },
})

export default styles
