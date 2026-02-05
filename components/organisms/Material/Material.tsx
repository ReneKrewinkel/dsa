// import { useState, useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import { MaterialInterface } from './Material.interface'
import MaterialStyle from './Material.style'

/// TODO: update interface/arguments for Material
const Material = ({ testID, style, type, size, props }: MaterialInterface) => {
  return (
    <View testID={testID} style={MaterialStyle.View}>
      <Text>Materiaal</Text>
    </View>
  )
}

export default Material
