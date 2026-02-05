import { StyleSheet } from 'react-native'
import {HeaderStyle} from '@/resources'

const PlanningStyle = StyleSheet.create({
  View: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  Title: {
    ...HeaderStyle,
    marginBottom: 20
  },
  SubTitle: {
    fontFamily: 'Bariol',
    fontSize: 18,
    marginBottom: 10
  }
})

export default PlanningStyle
