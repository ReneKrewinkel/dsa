// import { useState, useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import { SpinnerInterface } from './Spinner.interface'
import SpinnerStyle from './Spinner.style'
//@ts-ignore
import { BarIndicator } from 'react-native-indicators'

const Spinner = ({ testID }: SpinnerInterface) => {
  return (
    <View testID={testID} style={SpinnerStyle.View}>
      <BarIndicator color='#000000' size={40} />
    </View>
  )
}

export default Spinner
