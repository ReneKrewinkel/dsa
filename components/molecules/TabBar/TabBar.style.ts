import { StyleSheet } from 'react-native'
/// TODO: add general style(s)
/// import Style from './path/to/general/style

const TabBarStyle = StyleSheet.create({
  View: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#f9f9f9'
  },
  TabButton: {
    marginVertical: 5,
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
  },
  TabButtonActive: {
    borderBottomWidth: 4,
    borderBottomColor: '#007AFF'
  },
  TabText: {
    fontSize: 22,
    textTransform: 'uppercase',
    fontWeight: '600'
  }
})

export default TabBarStyle
