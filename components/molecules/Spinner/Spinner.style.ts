import { Dimensions, StyleSheet } from 'react-native'

import { COLORS } from '@/resources'

const SpinnerStyle = StyleSheet.create({
    View: {
        padding: 10,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: COLORS.WHITE,
        borderWidth: 1,
        borderColor: 'hotpink'
    }
})

export default SpinnerStyle
