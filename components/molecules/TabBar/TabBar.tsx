// import { useState, useEffect, useContext } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { TabBarInterface } from './TabBar.interface'
import TabBarStyle from './TabBar.style'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TabBar = ({testID, content, active }:TabBarInterface) => {

    return(
        <View testID={ testID }
              style={ TabBarStyle.View }>
            {
                content.map((tab, index) => {

                    const action = tab.action;
                    return (
                      <TouchableOpacity key={index} onPress={() => action() } style={[TabBarStyle.TabButton, active === tab.label ? TabBarStyle.TabButtonActive : null, { width: `${100/content.length}%` }]  }>
                          <MaterialCommunityIcons name={ tab.icon } size={24} color="black" />
                          <Text style={TabBarStyle.TabText}>{tab.label}</Text>
                      </TouchableOpacity>
                    )
                })
            }
        </View>
    )

}

export default TabBar
