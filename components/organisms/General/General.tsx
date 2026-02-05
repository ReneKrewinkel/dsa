// import { useState, useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import { GeneralInterface } from './General.interface'
import GeneralStyle from './General.style'

/// TODO: update interface/arguments for General
const General = ({ testID, style, type, size, props }: GeneralInterface) => {
  return (
    <View testID={testID} style={GeneralStyle.View}>
      <Text>Algemeen</Text>
    </View>
  )
}

export default General
