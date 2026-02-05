import { useState, useEffect, useContext } from 'react'
import { View, Text, Pressable } from 'react-native'
import { UserDropdownInterface } from './UserDropdown.interface'
import UserDropdownStyle from './UserDropdown.style'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import * as Animatable from 'react-native-animatable'

const UserDropdown = ({testID }:UserDropdownInterface) => {

    const [showDropdown, setShowDropdown] = useState(false)

    return(
      <>
        <View testID={ testID }
              style={ UserDropdownStyle.View }>
            <Pressable onPress={() => setShowDropdown(!showDropdown)} style={UserDropdownStyle.Pressable}>
                <Text style={UserDropdownStyle.Text}>John Doe</Text>
                <MaterialCommunityIcons name={showDropdown ? 'chevron-up' : 'chevron-down'} size={24} color='black' />

            </Pressable>
        </View>
    { showDropdown &&

        <Animatable.View style={UserDropdownStyle.Dropdown}
                         animation="fadeInDownBig"
                         duration={220}
                         delay={150}
        >
            <Text style={UserDropdownStyle.DropdownItem}>Mijn profiel</Text>
            <Text style={UserDropdownStyle.DropdownItem}>Instellingen</Text>
            <Text style={UserDropdownStyle.DropdownItem}>Uitloggen</Text>
        </Animatable.View>
    }
      </>
    )

}

export default UserDropdown
