// import { useState, useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import { HistoryInterface } from './History.interface'
import HistoryStyle from './History.style'

/// TODO: update interface/arguments for History
const History = ({ testID, style, type, size, props }: HistoryInterface) => {
  return (
    <View testID={testID} style={HistoryStyle.View}>
      <Text>Historie</Text>
    </View>
  )
}

export default History
