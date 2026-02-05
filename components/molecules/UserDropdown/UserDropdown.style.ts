import { StyleSheet } from 'react-native'
/// TODO: add general style(s)
/// import Style from './path/to/general/style

const UserDropdownStyle = StyleSheet.create({
  View: {
    padding: 10
  },

  Dropdown: {
    position: 'absolute',
    top: 50,
    right: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1000,
    padding: 20,
  },

  DropdownItem: {
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 10,
  }
})

export default UserDropdownStyle